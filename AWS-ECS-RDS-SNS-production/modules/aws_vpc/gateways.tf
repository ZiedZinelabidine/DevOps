resource "aws_internet_gateway" "this" {
  vpc_id = aws_vpc.this.id
}

resource "aws_eip" "nat" {
  count = length(aws_subnet.public.*)
}

###
# HA AWS NAT Gateway (expensive but HA ideal for production workload).
##
resource "aws_nat_gateway" "this" {
  count = var.enable_cost_savings ? 0 : length(aws_subnet.public.*)

  allocation_id = element(aws_eip.nat.*.id, count.index)
  subnet_id     = element(aws_subnet.public.*.id, count.index)
}

###
# Simple tiny EC2 instances to NAT internet access (not HA but cheap to test).
##
data "aws_ami" "nat" {
  most_recent = true
  owners      = ["amazon"]

  filter {
    name   = "name"
    values = ["amzn-ami-vpc-nat-*"]
  }
}

resource "aws_instance" "nat" {
  count = var.enable_cost_savings ? length(aws_subnet.public.*) : 0

  instance_type = "t3.nano"
  ami           = data.aws_ami.nat.id

  vpc_security_group_ids = aws_security_group.nat.*.id
  subnet_id              = element(aws_subnet.public.*.id, count.index)
  source_dest_check      = false

  tags = {
    Name = "nat-instance-${element(data.aws_availability_zones.available.names, count.index)}"
  }

  lifecycle {
    ignore_changes = [ami]
  }
}

resource "aws_eip_association" "nat" {
  count = var.enable_cost_savings ? length(aws_subnet.public.*) : 0

  instance_id   = element(aws_instance.nat.*.id, count.index)
  allocation_id = element(aws_eip.nat.*.id, count.index)
}

resource "aws_security_group" "nat" {
  count = var.enable_cost_savings ? 1 : 0

  name   = "nat-instance-ec2"
  vpc_id = aws_vpc.this.id

  ingress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = [aws_vpc.this.cidr_block]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}
