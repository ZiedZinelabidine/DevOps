module "invoices_export" {
  source = "../../components/invoices_export"

  cluster      = module.aws_ecs_cluster
  environment  = local.environment
  docker_image = module.api.docker_image

  network_configuration = {
    additional_security_groups = [module.aws_vpc.aws_default_security_group]
    subnets                    = module.aws_vpc.subnet_ids["application"]
    vpc_id                     = module.aws_vpc.id
  }

  ecs_task_definitions_bucket = aws_s3_bucket.ecs_task_definitions.bucket

  database = {
    host              = module.aws_rds_cluster_psql12.endpoint
    port              = module.aws_rds_cluster_psql12.port
    security_group_id = module.aws_rds_cluster_psql12.security_group_id
  }

  bucket_prefix = "${local.name}-${local.environment}-"
}
