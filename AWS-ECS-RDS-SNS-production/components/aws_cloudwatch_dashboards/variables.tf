data "aws_region" "current" {}

locals {
  color = {
    marketing_pages = "#7f7f7f"
    strapi          = "#bcbd22"
    frontend        = "#8c564b"
    api             = "#e377c2"
    admin           = "#17becf"
  }
}

variable "aws_ecs_cluster" {
  type = string
}

variable "target_groups" {
  type = map(string)
}

variable "aws_lb" {
  type = string
}

variable "cognito" {
  type = object({
    admin_user_pool_id        = string
    admin_user_pool_client_id = string
    user_user_pool_id         = string
    user_user_pool_client_id  = string
  })
}

variable "aws_cloudfront_distribution_id" {
  type = string
}

variable "aws_rds_cluster_instance" {
  type = string
}
