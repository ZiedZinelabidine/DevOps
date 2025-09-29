resource "aws_subnet" "public" {
  count = var.az_count

  vpc_id            = aws_vpc.this.id
  availability_zone = element(data.aws_availability_zones.available.names, count.index)

  cidr_block = cidrsubnet(aws_vpc.this.cidr_block, 7, count.index)

  map_public_ip_on_launch = true

  tags = {
    Name = "public-${count.index}"
  }
}

resource "aws_route_table_association" "public" {
  count = length(aws_subnet.public.*)

  subnet_id      = element(aws_subnet.public.*.id, count.index)
  route_table_id = element(aws_route_table.public.*.id, count.index)
}

resource "aws_route_table_association" "database" {
  count = length(aws_subnet.public.*)

  subnet_id      = element(aws_subnet.database.*.id, count.index)
  route_table_id = element(aws_route_table.private.*.id, count.index)
}

resource "aws_subnet" "database" {
  count = length(aws_subnet.public.*)

  vpc_id            = aws_vpc.this.id
  availability_zone = element(data.aws_availability_zones.available.names, count.index)

  cidr_block = cidrsubnet(aws_vpc.this.cidr_block, 7, 3 + count.index)

  tags = {
    Name = "database-${count.index}"
  }
}

resource "aws_subnet" "application" {
  count = length(aws_subnet.public.*)

  vpc_id            = aws_vpc.this.id
  availability_zone = element(data.aws_availability_zones.available.names, count.index)

  cidr_block = cidrsubnet(aws_vpc.this.cidr_block, 5, 2 + count.index)

  tags = {
    Name = "application-${count.index}"
  }
}

resource "aws_route_table_association" "application" {
  count = length(aws_subnet.public.*)

  subnet_id      = element(aws_subnet.application.*.id, count.index)
  route_table_id = element(aws_route_table.private.*.id, count.index)
}
