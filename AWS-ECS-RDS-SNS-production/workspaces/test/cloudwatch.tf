module "aws_cloudwatch_dashboards" {
  source = "../../components/aws_cloudwatch_dashboards"

  aws_ecs_cluster = module.aws_ecs_cluster.name

  aws_lb = module.aws_lb.arn_suffix
  target_groups = {
    api             = module.api.target_group.arn_suffix
    frontend        = module.frontend.target_group.arn_suffix
    strapi          = module.strapi.target_group.arn_suffix
    marketing_pages = module.marketing_pages.target_group.arn_suffix
    admin           = module.admin.target_group.arn_suffix
  }

  cognito = {
    admin_user_pool_id        = module.aws_cognito_user_pools.admin.user_pool_id
    admin_user_pool_client_id = module.aws_cognito_user_pools.admin.user_pool_client_id
    user_user_pool_id         = module.aws_cognito_user_pools.user.user_pool_id
    user_user_pool_client_id  = module.aws_cognito_user_pools.user.user_pool_client_id
  }

  aws_rds_cluster_instance       = module.aws_rds_cluster_psql12.aws_rds_cluster_instance
  aws_cloudfront_distribution_id = module.aws_cloudfront_distribution.id
}
