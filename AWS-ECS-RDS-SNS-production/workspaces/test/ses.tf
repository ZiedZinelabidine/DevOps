module "aws_ses_domain_identity" {
  source = "../../modules/aws_ses_domain_identity"

  domain = local.tld
}
