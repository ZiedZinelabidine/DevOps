variable "name" {
  type = string
}

variable "instance_count" {
  type    = number
  default = 1
}

variable "vpc_id" {
  type = string
}

variable "db_subnet_group_name" {
  type = string
}

variable "additional_security_groups" {
  type    = list(string)
  default = []
}

variable "database_name" {
  type = string
}

variable "master_username" {
  type = string
}
