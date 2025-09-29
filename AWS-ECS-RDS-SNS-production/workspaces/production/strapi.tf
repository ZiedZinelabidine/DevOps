module "strapi" {
  source = "../../components/strapi"

  cluster = module.aws_ecs_cluster

  ecs_task_definitions_bucket = aws_s3_bucket.ecs_task_definitions.bucket

  network_configuration = {
    additional_security_groups = [module.aws_vpc.aws_default_security_group]
    subnets                    = module.aws_vpc.subnet_ids["application"]
    vpc_id                     = module.aws_vpc.id
    assign_public_ip           = false
  }

  load_balancer = {
    security_group_id = module.aws_lb.security_group_id
  }

  database = {
    host              = module.aws_rds_cluster_psql12.endpoint
    port              = module.aws_rds_cluster_psql12.port
    security_group_id = module.aws_rds_cluster_psql12.security_group_id
  }

  bucket_prefix = "${local.name}-"

  cors_rule = {
    allowed_headers = ["*"]
    allowed_methods = ["GET", "PUT"]
    allowed_origins = [
      "https://${module.aws_cloudfront_distribution.aliases[0]}",
      "https://${module.aws_lb.aws_acm_certificates.strapi.domain_name}"
    ]
  }

  cloudfront_distribution_origin_access_identity = module.aws_cloudfront_distribution.origin_access_identity.iam_arn
}
