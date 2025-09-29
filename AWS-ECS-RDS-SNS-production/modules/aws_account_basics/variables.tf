variable "name" {
  type = string
}

variable "monthly_budget" {
  type = object({
    limit_amount               = string
    subscriber_email_addresses = list(string)
  })
}

variable "aws_iam_super_users" {
  type    = list(string)
  default = []
}
