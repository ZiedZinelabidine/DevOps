output "aws_cloudwatch_event_rule" {
  value = aws_cloudwatch_event_rule.this
}

output "security_group_id" {
  value = aws_security_group.this.id
}

output "iam_role" {
  value = {
    arn  = aws_iam_role.task.arn
    name = aws_iam_role.task.name
  }
}

output "execution_role" {
  value = {
    arn  = aws_iam_role.ecs.arn
    name = aws_iam_role.ecs.name
  }
}

output "events_role" {
  value = {
    arn  = aws_iam_role.scheduled_task_cw_event.arn
    name = aws_iam_role.scheduled_task_cw_event.name
  }
}
