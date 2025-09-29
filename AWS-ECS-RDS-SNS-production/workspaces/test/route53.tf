resource "aws_route53_zone" "this" {
  name = local.tld
}

###
# www2.test.saveursetvie.fr
##
resource "aws_route53_record" "www2" {
  zone_id = aws_route53_zone.this.id
  name    = module.aws_lb.aws_acm_certificates.www2.domain_name
  type    = "A"

  alias {
    name                   = module.aws_lb.dns_name
    zone_id                = module.aws_lb.zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "www2_acm_validation" {
  for_each = {
    for dvo in module.aws_lb.aws_acm_certificates.www2.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  zone_id         = aws_route53_zone.this.id
  name            = each.value.name
  type            = each.value.type
  allow_overwrite = true
  ttl             = 60
  records         = [each.value.record]
}

###
# www.test.saveursetvie.fr
##
resource "aws_route53_record" "cloudfront" {
  zone_id = aws_route53_zone.this.id
  name    = module.aws_cloudfront_distribution.aws_acm_certificate.domain_name
  type    = "A"

  alias {
    name                   = module.aws_cloudfront_distribution.domain_name
    zone_id                = module.aws_cloudfront_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "cloudfront_acm_validation" {
  for_each = {
    for dvo in module.aws_cloudfront_distribution.aws_acm_certificate.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  zone_id         = aws_route53_zone.this.id
  name            = each.value.name
  type            = each.value.type
  allow_overwrite = true
  ttl             = 60
  records         = [each.value.record]
}

###
# content.test.saveursetvie.fr
##
resource "aws_route53_record" "strapi" {
  zone_id = aws_route53_zone.this.id
  name    = module.aws_lb.aws_acm_certificates.strapi.domain_name
  type    = "A"

  alias {
    name                   = module.aws_lb.dns_name
    zone_id                = module.aws_lb.zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "strapi_acm_validation" {
  for_each = {
    for dvo in module.aws_lb.aws_acm_certificates.strapi.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  zone_id         = aws_route53_zone.this.id
  name            = each.value.name
  type            = each.value.type
  allow_overwrite = true
  ttl             = 60
  records         = [each.value.record]
}

###
# api.test.saveursetvie.fr
##
resource "aws_route53_record" "api" {
  zone_id = aws_route53_zone.this.id
  name    = module.aws_lb.aws_acm_certificates.api.domain_name
  type    = "A"

  alias {
    name                   = module.aws_lb.dns_name
    zone_id                = module.aws_lb.zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "api_acm_validation" {
  for_each = {
    for dvo in module.aws_lb.aws_acm_certificates.api.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  zone_id         = aws_route53_zone.this.id
  name            = each.value.name
  type            = each.value.type
  allow_overwrite = true
  ttl             = 60
  records         = [each.value.record]
}

###
# admin.test.saveursetvie.fr
##
resource "aws_route53_record" "admin" {
  zone_id = aws_route53_zone.this.id
  name    = module.aws_lb.aws_acm_certificates.admin.domain_name
  type    = "A"

  alias {
    name                   = module.aws_lb.dns_name
    zone_id                = module.aws_lb.zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "admin_acm_validation" {
  for_each = {
    for dvo in module.aws_lb.aws_acm_certificates.admin.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  zone_id         = aws_route53_zone.this.id
  name            = each.value.name
  type            = each.value.type
  allow_overwrite = true
  ttl             = 60
  records         = [each.value.record]
}

###
# SES Domain Identity related records
##
resource "aws_route53_record" "aws_ses_identity_validation" {
  zone_id = aws_route53_zone.this.id
  name    = "_amazonses"

  type    = "TXT"
  ttl     = 600
  records = [module.aws_ses_domain_identity.verification_token]
}

resource "aws_route53_record" "aws_ses_identity_dkim_validation" {
  count   = 3
  zone_id = aws_route53_zone.this.id
  name    = "${element(module.aws_ses_domain_identity.aws_ses_domain_dkim.dkim_tokens, count.index)}._domainkey"

  type    = "CNAME"
  ttl     = "600"
  records = ["${element(module.aws_ses_domain_identity.aws_ses_domain_dkim.dkim_tokens, count.index)}.dkim.amazonses.com"]
}

resource "aws_route53_record" "aws_ses_identity_spf" {
  zone_id = aws_route53_zone.this.id
  name    = ""
  type    = "TXT"
  ttl     = "600"
  records = ["v=spf1 include:amazonses.com -all"]
}

resource "aws_route53_record" "aws_ses_identity_dmarc" {
  zone_id = aws_route53_zone.this.id
  name    = "_dmarc"
  type    = "TXT"
  ttl     = "600"
  records = ["v=DMARC1; p=reject; sp=reject; aspf=s; pct=100"]
}
