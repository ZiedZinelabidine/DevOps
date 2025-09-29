output "arn" {
  value = aws_ecs_service.this.id
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
