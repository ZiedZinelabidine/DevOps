module "marketing_pages" {
  source = "../../components/marketing_pages"

  cluster     = module.aws_ecs_cluster
  environment = local.environment

  ecs_task_definitions_bucket = aws_s3_bucket.ecs_task_definitions.bucket

  api_url = "https://${module.aws_lb.aws_acm_certificates.strapi.domain_name}"

  network_configuration = {
    additional_security_groups = [module.aws_vpc.aws_default_security_group]
    subnets                    = module.aws_vpc.subnet_ids["application"]
    vpc_id                     = module.aws_vpc.id
    assign_public_ip           = false
  }

  load_balancer = {
    security_group_id = module.aws_lb.security_group_id
  }
}
