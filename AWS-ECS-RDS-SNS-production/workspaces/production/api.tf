module "api" {
  source = "../../components/api"

  cluster     = module.aws_ecs_cluster
  environment = local.environment

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

  cognito = {
    admin_user_pool_id = module.aws_cognito_user_pools.admin.user_pool_id
    user_pool_id       = module.aws_cognito_user_pools.user.user_pool_id
  }

  database = {
    host              = module.aws_rds_cluster_psql12.endpoint
    port              = module.aws_rds_cluster_psql12.port
    security_group_id = module.aws_rds_cluster_psql12.security_group_id
  }

  azure = {
    api_url          = "https://erp.saveursetvie.fr/ecommerce/v1"
    certificate_path = "certs/ecommerce.client.tls.saveursetvie.fr.p12"
  }

  aws_ses_domain_identity_arn      = module.aws_ses_domain_identity.arn
  dev_team_email                   = "saveursetvie.catch.prod@thecodingmachine.com"
  send_commercial_service_email    = "service.commercial@saveursetvie.fr"
  receive_commercial_service_email = "service.commercial@saveursetvie.fr"
  send_web_order_email             = "commande.web@saveursetvie.fr"
  receive_web_order_email          = "commande.web@saveursetvie.fr"

  bucket_prefix = "${local.name}-"

  cors_rule = {
    allowed_headers = ["*"]
    allowed_methods = ["GET", "PUT"]
    allowed_origins = ["https://${module.aws_cloudfront_distribution.aliases[0]}"]
  }

  cloudfront_distribution_origin_access_identity = module.aws_cloudfront_distribution.origin_access_identity.iam_arn
}
