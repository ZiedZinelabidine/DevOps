resource "aws_s3_object" "ecs_task_definition" {
  bucket = var.ecs_task_definitions_bucket
  key    = "${var.name}.json"

  content = jsonencode({
    family = var.name

    networkMode             = "awsvpc"
    requiresCompatibilities = ["FARGATE"]

    cpu    = var.cpu != 0 ? var.cpu : tostring(sum([for i in jsondecode(var.container_definitions) : try(i.cpu, 0)]))
    memory = var.memory != 0 ? var.memory : tostring(sum([for i in jsondecode(var.container_definitions) : try(i.memory, 0)]))

    executionRoleArn = aws_iam_role.ecs.arn
    taskRoleArn      = aws_iam_role.task.arn

    containerDefinitions = jsondecode(var.container_definitions)
  })
}
