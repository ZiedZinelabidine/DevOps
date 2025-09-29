variable "name_prefix" {
  type = string
}

variable "email_configuration" {
  type = object({
    source_arn         = string
    from_email_address = string
  })
}

variable "base_email_redirect_url" {
  type = string
}
