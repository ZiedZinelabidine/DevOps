data "aws_subnet" "this" {
  id = var.subnet_id
}

variable "subnet_id" {
  type = string
}
