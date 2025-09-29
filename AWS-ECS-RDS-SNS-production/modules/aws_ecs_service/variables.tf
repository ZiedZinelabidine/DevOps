locals {
  cloudwatch_log_groups = distinct([for i in jsondecode(var.container_definitions) : i.logConfiguration.options.awslogs-group if try(i.logConfiguration.logDriver, "false") == "awslogs"])
}

data "aws_subnet" "this" {
  id = var.network_configuration.subnets[0]
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

variable "name" {
  type = string
}

variable "cpu" {
  type    = number
  default = 0
}

variable "memory" {
  type    = number
  default = 0
}

variable "container_definitions" {
  type = string
}

variable "target_groups" {
  type = list(object({
    arn            = string
    container_name = string
    container_port = number
  }))
  default = []
}

variable "network_configuration" {
  type = object({
    additional_security_groups = list(string)
    subnets                    = list(string)
    assign_public_ip           = bool
  })
}

variable "ecs_task_definitions_bucket" {
  type = string
}
