resource "aws_ecs_task_definition" "init" {
  family = var.name

  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]

  cpu    = 256
  memory = 512

  container_definitions = jsonencode([{
    name  = "app"
    image = "nginx"
  }])
}

resource "aws_s3_object" "ecs_task_definition" {
  bucket = var.ecs_task_definitions_bucket
  key    = "${var.name}.json"

  content = jsonencode({
    family = aws_ecs_task_definition.init.family

    networkMode = "awsvpc"
    requiresCompatibilities = [
      "FARGATE"
    ]

    cpu    = var.cpu != 0 ? var.cpu : tostring(sum([for i in jsondecode(var.container_definitions) : try(i.cpu, 0)]))
    memory = var.memory != 0 ? var.memory : tostring(sum([for i in jsondecode(var.container_definitions) : try(i.memory, 0)]))

    executionRoleArn = aws_iam_role.ecs.arn
    taskRoleArn      = aws_iam_role.task.arn

    containerDefinitions = jsondecode(var.container_definitions)
  })
}

resource "aws_ecs_service" "this" {
  depends_on = [aws_iam_role_policy_attachment.ecs_execution_role]

  name            = aws_ecs_task_definition.init.family
  cluster         = var.cluster.name
  task_definition = aws_ecs_task_definition.init.arn

  desired_count = 1
  launch_type   = "FARGATE"

  dynamic "capacity_provider_strategy" {
    for_each = var.capacity_provider_strategies

    content {

      base              = capacity_provider_strategy.value["base"]
      capacity_provider = capacity_provider_strategy.value["capacity_provider"]
      weight            = capacity_provider_strategy.value["weight"]
    }
  }

  dynamic "load_balancer" {
    for_each = var.target_groups
    content {
      target_group_arn = load_balancer.value["arn"]
      container_name   = load_balancer.value["container_name"]
      container_port   = load_balancer.value["container_port"]
    }
  }

  network_configuration {
    subnets = var.network_configuration.subnets
    security_groups = concat([
      aws_security_group.this.id,
    ], var.network_configuration.additional_security_groups)
    assign_public_ip = var.network_configuration.assign_public_ip
  }

  lifecycle {
    ignore_changes = [desired_count, task_definition, capacity_provider_strategy, launch_type, cluster]
  }
}
