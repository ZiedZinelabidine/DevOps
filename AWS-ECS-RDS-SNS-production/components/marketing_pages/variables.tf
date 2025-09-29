data "aws_region" "current" {}

locals {
  name = "marketing-pages"
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

variable "capacity_provider_strategies" {
  type = list(object({
    base              = number
    capacity_provider = string
    weight            = number
  }))
  default = []
}

variable "ecs_task_definitions_bucket" {
  type = string
}

variable "network_configuration" {
  type = object({
    additional_security_groups = list(string)
    subnets                    = list(string)
    vpc_id                     = string
    assign_public_ip           = bool
  })
}

variable "load_balancer" {
  type = object({
    security_group_id = string
  })
}

variable "api_url" {
  type = string
}
