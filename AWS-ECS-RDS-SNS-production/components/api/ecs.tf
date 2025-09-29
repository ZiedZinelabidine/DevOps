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
      "dependsOn" = [{
        "containerName" = "db-migration",
        "condition"     = "SUCCESS",
      }],
      "portMappings" = [{
        "containerPort" = aws_lb_target_group.this.port
      }],
      "environment" = [{
        "name"  = "AWS_REGION",
        "value" = data.aws_region.current.name
        }, {
        "name"  = "ENVIRONMENT",
        "value" = var.environment
        }, {
        "name"  = "ADMIN_USER_POOL_ID",
        "value" = var.cognito.admin_user_pool_id
        }, {
        "name"  = "USER_POOL_ID",
        "value" = var.cognito.user_pool_id
        }, {
        "name"  = "IMAGE_BUCKET_NAME",
        "value" = aws_s3_bucket.this.bucket
        }, {
        "name"  = "DB_HOST",
        "value" = var.database.host
        }, {
        "name"  = "DB_PORT",
        "value" = tostring(var.database.port)
        }, {
        "name"  = "DB_NAME",
        "value" = local.name
        }, {
        "name"  = "DB_USER",
        "value" = local.name
        }, {
        "name"  = "AZURE_API_URL",
        "value" = var.azure.api_url
        }, {
        "name"  = "AZURE_CERTIFICATE_PATH",
        "value" = var.azure.certificate_path
        }, {
        "name"  = "PAYMENT_MODE",
        "value" = (var.environment == "production" ? "PRODUCTION" : "TEST")
        }, {
        "name"  = "PAYMENT_SITE_ID",
        "value" = "15254408"
        }, {
        "name"  = "PAYMENT_URL",
        "value" = "https://sogecommerce.societegenerale.eu/vads-payment/"
        }, {
        "name"  = "SVO_PAYMENT_SITE_ID",
        "value" = "79823388"
        }, {
        "name"  = "SVC_PAYMENT_SITE_ID",
        "value" = "26686455"
        }, {
        "name"  = "SEND_COMMERCIAL_SERVICE_EMAIL",
        "value" = var.send_commercial_service_email
        }, {
        "name"  = "SEND_WEB_ORDER_EMAIL",
        "value" = var.send_web_order_email
        }, {
        "name"  = "RECEIVE_COMMERCIAL_SERVICE_EMAIL",
        "value" = var.receive_commercial_service_email
        }, {
        "name"  = "RECEIVE_WEB_ORDER_EMAIL",
        "value" = var.receive_web_order_email
        }, {
        "name"  = "DEV_TEAM_EMAIL",
        "value" = var.dev_team_email
        }, {
        "name"  = "TRUSTPILOT_EMAIL",
        "value" = "saveursetvie.fr+3b16a3a86d@invite.trustpilot.com"
      }],
      "secrets" : [{
        "name"      = "DB_PASSWORD",
        "valueFrom" = aws_ssm_parameter.database_password.arn
        }, {
        "name"      = "AZURE_API_PASSPHRASE",
        "valueFrom" = aws_ssm_parameter.azure_passphrase.arn
        }, {
        "name"      = "PAYMENT_COMPANY_KEY",
        "valueFrom" = aws_ssm_parameter.payment_company_key.arn
        }, {
        "name"      = "SVO_PAYMENT_COMPANY_KEY",
        "valueFrom" = aws_ssm_parameter.svo_payment_company_key.arn
        }, {
        "name"      = "SVC_PAYMENT_COMPANY_KEY",
        "valueFrom" = aws_ssm_parameter.svc_payment_company_key.arn
      }],
      "logConfiguration" = {
        "logDriver" = "awslogs",
        "options" = {
          "awslogs-group"         = "/aws/ecs/services/${local.name}",
          "awslogs-region"        = data.aws_region.current.name,
          "awslogs-stream-prefix" = "ecs"
        }
      },
      }, {
      "name"      = "db-migration",
      "image"     = "${module.aws_ecr_repository.repository_url}:latest",
      "command"   = ["npm", "run", "db:run-migration"],
      "essential" = false,
      "environment" = [{
        "name"  = "DB_HOST",
        "value" = var.database.host
        }, {
        "name"  = "DB_PORT",
        "value" = tostring(var.database.port)
        }, {
        "name"  = "DB_NAME",
        "value" = local.name
        }, {
        "name"  = "DB_USER",
        "value" = local.name
      }],
      "secrets" : [{
        "name" = "DB_PASSWORD",
        "valueFrom" : aws_ssm_parameter.database_password.arn
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
