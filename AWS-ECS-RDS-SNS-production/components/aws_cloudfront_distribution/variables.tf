data "aws_canonical_user_id" "current" {}

variable "log_bucket_prefix" {
  type = string
}

variable "aliases" {
  type = list(string)
}

variable "default_origin" {
  type = object({
    origin_id   = string
    domain_name = string
  })
}

variable "images_s3_origin" {
  type = object({
    origin_id   = string
    domain_name = string
  })
}

variable "strapi_s3_origin" {
  type = object({
    origin_id   = string
    domain_name = string
  })
}
