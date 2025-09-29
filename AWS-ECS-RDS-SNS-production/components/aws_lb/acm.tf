resource "aws_acm_certificate" "www2" {
  domain_name       = "www2.${var.tld}"
  validation_method = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_acm_certificate" "api" {
  domain_name       = "api.${var.tld}"
  validation_method = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_acm_certificate" "strapi" {
  domain_name       = "content.${var.tld}"
  validation_method = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_acm_certificate" "admin" {
  domain_name       = "admin.${var.tld}"
  validation_method = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}
