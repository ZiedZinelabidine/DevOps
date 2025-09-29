module "aws_cloudfront_distribution" {
  source = "../../components/aws_cloudfront_distribution"

  providers = {
    aws.us_east_1 = aws.us_east_1
  }

  aliases = [
    "www.${local.tld}"
  ]

  default_origin = {
    origin_id   = "www2"
    domain_name = module.aws_lb.aws_acm_certificates.www2.domain_name
  }

  images_s3_origin = {
    domain_name = module.api.aws_s3_bucket.bucket_regional_domain_name
    origin_id   = module.api.aws_s3_bucket.bucket
  }

  strapi_s3_origin = {
    domain_name = module.strapi.aws_s3_bucket.bucket_regional_domain_name
    origin_id   = module.strapi.aws_s3_bucket.bucket
  }

  log_bucket_prefix = "${local.name}-${local.environment}-"
}
