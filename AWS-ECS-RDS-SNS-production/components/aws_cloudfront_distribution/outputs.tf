output "id" {
  value = aws_cloudfront_distribution.this.id
}

output "aliases" {
  value = var.aliases
}

output "custom_headers" {
  value = {
    Custom-X-Token = random_uuid.cloudfront_token.result
  }
}

output "origin_access_identity" {
  value = aws_cloudfront_origin_access_identity.this
}

output "aws_acm_certificate" {
  value = aws_acm_certificate.this
}

output "domain_name" {
  value = aws_cloudfront_distribution.this.domain_name
}

output "hosted_zone_id" {
  value = aws_cloudfront_distribution.this.hosted_zone_id
}
