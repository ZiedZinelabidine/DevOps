resource "aws_cloudwatch_log_group" "this" {
  for_each = toset(local.cloudwatch_log_groups)

  name = each.key

  retention_in_days = 30
}

resource "aws_cloudwatch_event_rule" "this" {
  name                = "${var.name}-ecs"
  schedule_expression = var.schedule_expression
}

resource "aws_s3_object" "events_target" {
  bucket = var.ecs_task_definitions_bucket
  key    = "${var.name}-event-targets.json"

  content = jsonencode({
    Rule = aws_cloudwatch_event_rule.this.name
    Targets = [
      {
        Id      = var.name
        Arn     = var.cluster.arn
        RoleArn = aws_iam_role.scheduled_task_cw_event.arn
        EcsParameters = {
          TaskDefinitionArn = "TASK_DEFINITION"
          TaskCount         = 1
          LaunchType        = "FARGATE"
          NetworkConfiguration = {
            awsvpcConfiguration = {
              Subnets = var.network_configuration.subnets
              SecurityGroups = concat([
                aws_security_group.this.id,
              ], var.network_configuration.additional_security_groups)
              AssignPublicIp = var.network_configuration.assign_public_ip ? "ENABLED" : "DISABLED"
            }
          },
          PlatformVersion = "1.4.0"
        }
      }
    ]
  })
}
