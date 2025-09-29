data "aws_subnet" "this" {
  id = var.subnets[0]
}

variable "name" {
  type = string
}

variable "subnets" {
  type = list(string)
}

variable "tld" {
  type = string
}

# Services
variable "frontend" {
  type = object({
    target_group_arn = string
    host_header      = string
    custom_x_token   = string
  })
}

variable "api" {
  type = object({
    target_group_arn = string
  })
}

variable "marketing_pages" {
  type = object({
    target_group_arn = string
    host_header      = string
    custom_x_token   = string
  })
}

variable "strapi" {
  type = object({
    target_group_arn = string
  })
}

variable "admin" {
  type = object({
    target_group_arn = string
  })
}
