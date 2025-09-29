resource "aws_iam_service_linked_role" "ecs" {
  aws_service_name = "ecs.amazonaws.com"
}

module "aws_ecs_cluster" {
  source = "../../modules/aws_ecs_cluster"

  name = "${local.environment}-cluster"

  default_capacity_provider = "FARGATE_SPOT"
}
