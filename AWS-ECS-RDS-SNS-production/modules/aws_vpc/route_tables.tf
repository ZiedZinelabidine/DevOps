resource "aws_route_table" "public" {
  vpc_id = aws_vpc.this.id

  tags = {
    Name = "public"
  }
}

resource "aws_route" "public_default" {
  route_table_id         = aws_route_table.public.id
  destination_cidr_block = "0.0.0.0/0"
  gateway_id             = aws_internet_gateway.this.id
}

resource "aws_route_table" "private" {
  count = length(aws_subnet.public.*)

  vpc_id = aws_vpc.this.id

  tags = {
    Name = "private-${count.index}"
  }
}

resource "aws_route" "private_default_nat_gateway" {
  count = var.enable_cost_savings ? 0 : length(aws_subnet.public.*)

  route_table_id         = element(aws_route_table.private.*.id, count.index)
  destination_cidr_block = "0.0.0.0/0"
  nat_gateway_id         = element(aws_nat_gateway.this.*.id, count.index)
}

resource "aws_route" "private_default_ec2" {
  count = var.enable_cost_savings ? length(aws_subnet.public.*) : 0

  route_table_id         = element(aws_route_table.private.*.id, count.index)
  destination_cidr_block = "0.0.0.0/0"
  network_interface_id   = element(aws_instance.nat.*.primary_network_interface_id, count.index)
}
