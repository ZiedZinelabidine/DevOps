module "admin" {
  source = "../../components/admin"

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

  cognito = {
    admin_user_pool_id        = module.aws_cognito_user_pools.admin.user_pool_id
    admin_user_pool_client_id = module.aws_cognito_user_pools.admin.user_pool_client_id
  }

  api_url = "https://${module.aws_lb.aws_acm_certificates.api.domain_name}/api"
}
