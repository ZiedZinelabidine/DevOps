module "frontend" {
  source = "../../components/frontend"

  cluster     = module.aws_ecs_cluster
  environment = local.environment

  capacity_provider_strategies = [{
    base              = 0
    capacity_provider = "FARGATE_SPOT"
    weight            = 1
  }]

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
}
