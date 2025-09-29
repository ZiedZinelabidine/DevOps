module "aws_cognito_user_pools" {
  source = "../../components/aws_cognito_user_pools"

  name_prefix = "app-"

  email_configuration = {
    source_arn         = module.aws_ses_domain_identity.arn
    from_email_address = "ne-pas-repondre@${module.aws_ses_domain_identity.domain}"
  }

  base_email_redirect_url = "https://${module.aws_cloudfront_distribution.aliases[0]}"
}
