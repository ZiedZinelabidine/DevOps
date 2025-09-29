resource "aws_acm_certificate" "this" {
  provider = aws.us_east_1

  domain_name               = var.aliases[0]
  subject_alternative_names = slice(var.aliases, 1, length(var.aliases))
  validation_method         = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}
