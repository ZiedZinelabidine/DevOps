data "aws_availability_zones" "available" {}

variable "name" {
  type = string
}

variable "cidr_block" {
  type = string
}

variable "az_count" {
  type    = number
  default = 2
}

variable "enable_cost_savings" {
  type    = bool
  default = false
}
