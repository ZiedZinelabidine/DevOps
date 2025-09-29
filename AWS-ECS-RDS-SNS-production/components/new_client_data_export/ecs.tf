module "aws_ecs_scheduled_task" {
  source = "../../modules/aws_ecs_scheduled_task"

  cluster = var.cluster
  name    = local.name

  schedule_expression = "cron(0 0 ? * MON *)" # Monday at 0:00AM UTC

  container_definitions = jsonencode([{
    name    = local.name
    image   = var.docker_image,
    cpu     = 256
    memory  = 512
    command = ["/bin/sh", "-c", "cd /home/node/scripts/new-client-data-export && npm run export"]
    environment = [{
      name  = "AWS_REGION",
      value = data.aws_region.current.name
      }, {
      name  = "ENVIRONMENT",
      value = var.environment
      }, {
      name  = "DB_HOST",
      value = var.database.host
      }, {
      name  = "DB_PORT",
      value = tostring(var.database.port)
      }, {
      name  = "DB_NAME",
      value = "api"
      }, {
      name  = "DB_USER",
      value = "api"
      }, {
      "name"  = "SEND_COMMERCIAL_SERVICE_EMAIL",
      "value" = var.send_commercial_service_email
      }, {
      name = "RECEIVE_EXPORT_NEW_CLIENT_EMAIL",
      value = join(",", [
        "ange.tailly@saveursetvie.fr",
        "laure.cordera@saveursetvie.fr",
        "gabrielle.inacio@saveursetvie.fr",
        "laetitia.robert@saveursetvie.fr",
        "julien.peneau@saveursetvie.fr",
      ])
    }],
    secrets = [{
      name      = "DB_PASSWORD",
      valueFrom = aws_ssm_parameter.database_password.arn
    }],
    logConfiguration = {
      logDriver = "awslogs"
      options = {
        awslogs-group         = "/aws/ecs/scheduled-tasks/${local.name}",
        awslogs-region        = data.aws_region.current.name
        awslogs-stream-prefix = "ecs"
      }
    }
  }])

  ecs_task_definitions_bucket = var.ecs_task_definitions_bucket

  network_configuration = {
    additional_security_groups = var.network_configuration.additional_security_groups
    subnets                    = var.network_configuration.subnets
    vpc_id                     = var.network_configuration.vpc_id
    assign_public_ip           = false
  }
}
