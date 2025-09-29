data "aws_region" "current" {}

locals {
  name = "invoices-export"
}

variable "docker_image" {
  type = string
}

variable "cluster" {
  type = object({
    arn  = string
    name = string
  })
}

variable "environment" {
  type = string
}

variable "ecs_task_definitions_bucket" {
  type = string
}

variable "network_configuration" {
  type = object({
    additional_security_groups = list(string)
    subnets                    = list(string)
    vpc_id                     = string
  })
}

variable "database" {
  type = object({
    host              = string
    port              = number
    security_group_id = string
  })
}

variable "bucket_prefix" {
  type    = string
  default = ""
}
