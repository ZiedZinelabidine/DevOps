module "aws_lb" {
  source = "../../components/aws_lb"

  name    = "app"
  tld     = local.tld
  subnets = module.aws_vpc.subnet_ids["public"]

  # Services
  frontend = {
    target_group_arn = module.frontend.target_group.arn
    host_header      = module.aws_cloudfront_distribution.aliases[0]
    custom_x_token   = module.aws_cloudfront_distribution.custom_headers["Custom-X-Token"]
  }

  api = {
    target_group_arn = module.api.target_group.arn
  }

  marketing_pages = {
    target_group_arn = module.marketing_pages.target_group.arn
    host_header      = module.aws_cloudfront_distribution.aliases[0]
    custom_x_token   = module.aws_cloudfront_distribution.custom_headers["Custom-X-Token"]
  }

  strapi = {
    target_group_arn = module.strapi.target_group.arn
  }

  admin = {
    target_group_arn = module.admin.target_group.arn
  }
}
