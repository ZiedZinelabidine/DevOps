output "aws_default_security_group" {
  value = aws_default_security_group.this.id
}

output "subnet_ids" {
  value = {
    public      = aws_subnet.public.*.id
    database    = aws_subnet.database.*.id
    application = aws_subnet.application.*.id
  }
}

output "id" {
  value = aws_vpc.this.id
}

output "eips" {
  value = {
    "nat" = aws_eip.nat.*.public_ip
  }
}
