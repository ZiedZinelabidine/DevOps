data "aws_region" "current" {}

locals {
  name = "strapi"
}

variable "cluster" {
  type = object({
    arn  = string
    name = string
  })
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

variable "database" {
  type = object({
    host              = string
    port              = number
    security_group_id = string
  })
}

variable "bucket_prefix" {
  type = string
}

variable "cors_rule" {
  type = object({
    allowed_headers = list(string)
    allowed_methods = list(string)
    allowed_origins = list(string)
  })
}

variable "cloudfront_distribution_origin_access_identity" {
  type = string
}
