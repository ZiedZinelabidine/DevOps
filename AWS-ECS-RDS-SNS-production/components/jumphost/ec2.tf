resource "aws_eip" "this" {
  instance = aws_instance.this.id
}

data "template_file" "cloud_config" {
  template = file("${path.module}/cloud-config.tpl")
}

resource "aws_instance" "this" {
  instance_type = "t3.micro"
  ami           = data.aws_ami.ubuntu.id

  user_data_base64 = base64gzip(data.template_file.cloud_config.rendered)

  subnet_id = var.subnet_id
  vpc_security_group_ids = [
    aws_security_group.this.id
  ]

  tags = {
    Name = "jumphost"
  }

  lifecycle {
    create_before_destroy = true
    ignore_changes        = [ami]
  }
}

resource "aws_security_group" "this" {
  name_prefix = "jumphost-ec2"
  vpc_id      = data.aws_subnet.this.vpc_id

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}
