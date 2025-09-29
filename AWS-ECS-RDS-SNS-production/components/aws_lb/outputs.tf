output "security_group_id" {
  value = aws_security_group.this.id
}

output "dns_name" {
  value = aws_lb.this.dns_name
}

output "zone_id" {
  value = aws_lb.this.zone_id
}

output "arn_suffix" {
  value = aws_lb.this.arn_suffix
}

output "aws_acm_certificates" {
  value = {
    www2   = aws_acm_certificate.www2
    api    = aws_acm_certificate.api
    strapi = aws_acm_certificate.strapi
    admin  = aws_acm_certificate.admin
  }
}
