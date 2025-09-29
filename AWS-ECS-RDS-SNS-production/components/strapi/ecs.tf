module "aws_ecs_service" {
  source = "../../modules/aws_ecs_service"

  cluster                      = var.cluster
  capacity_provider_strategies = var.capacity_provider_strategies

  name = local.name
  container_definitions = jsonencode(
    [{
      "name"   = local.name,
      "image"  = "${module.aws_ecr_repository.repository_url}:latest",
      "cpu"    = 256,
      "memory" = 512,
      "portMappings" = [{
        "containerPort" = aws_lb_target_group.this.port
      }],
      "environment" = [{
        "name"  = "NODE_ENV",
        "value" = "production"
        }, {
        "name"  = "AWS_REGION",
        "value" = data.aws_region.current.name
        }, {
        "name"  = "AWS_BUCKET",
        "value" = aws_s3_bucket.this.bucket
        }, {
        "name"  = "AWS_ACCESS_KEY_ID",
        "value" = aws_iam_access_key.this.id
        }, {
        "name"  = "DATABASE_NAME",
        "value" = local.name
        }, {
        "name"  = "DATABASE_HOST",
        "value" = var.database.host
        }, {
        "name"  = "DATABASE_PORT",
        "value" = tostring(var.database.port)
        }, {
        "name"  = "DATABASE_USERNAME",
        "value" = local.name
      }],
      "secrets" = [{
        "name"      = "DATABASE_PASSWORD",
        "valueFrom" = aws_ssm_parameter.database_password.arn
        }, {
        "name"      = "AWS_ACCESS_SECRET_KEY",
        "valueFrom" = aws_ssm_parameter.user_access_key.arn
      }],
      "logConfiguration" = {
        "logDriver" = "awslogs",
        "options" = {
          "awslogs-group"         = "/aws/ecs/services/${local.name}",
          "awslogs-region"        = data.aws_region.current.name,
          "awslogs-stream-prefix" = "ecs"
        }
      },
    }]
  )

  target_groups = [{
    arn            = aws_lb_target_group.this.arn
    container_name = local.name
    container_port = aws_lb_target_group.this.port
  }]

  network_configuration       = var.network_configuration
  ecs_task_definitions_bucket = var.ecs_task_definitions_bucket
}
