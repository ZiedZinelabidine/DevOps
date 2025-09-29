resource "aws_ecs_cluster" "this" {
  name = var.name

  setting {
    name  = "containerInsights"
    value = var.enable_container_insights ? "enabled" : "disabled"
  }
}

resource "aws_ecs_cluster_capacity_providers" "default" {
  cluster_name = aws_ecs_cluster.this.name

  capacity_providers = [var.default_capacity_provider]


  default_capacity_provider_strategy {
    base              = 1
    weight            = 100
    capacity_provider = var.default_capacity_provider
  }
}
