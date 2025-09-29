output "arn" {
  value = aws_ses_domain_identity.this.arn
}

output "domain" {
  value = aws_ses_domain_identity.this.domain
}

output "verification_token" {
  value = aws_ses_domain_identity.this.verification_token
}

output "aws_ses_domain_dkim" {
  value = aws_ses_domain_dkim.this
}
