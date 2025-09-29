###
# ECS IAM Roles
##
data "aws_iam_policy_document" "ecs_tasks_sts" {
  statement {
    actions = ["sts:AssumeRole"]
    principals {
      type        = "Service"
      identifiers = ["ecs-tasks.amazonaws.com"]
    }
  }
}

resource "aws_iam_role" "ecs" {
  name               = "${var.name}-ecs"
  assume_role_policy = data.aws_iam_policy_document.ecs_tasks_sts.json
}

resource "aws_iam_role" "task" {
  name               = "${var.name}-ecs-task"
  assume_role_policy = data.aws_iam_policy_document.ecs_tasks_sts.json
}

resource "aws_iam_role_policy_attachment" "ecs_execution_role" {
  role       = aws_iam_role.ecs.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
}

resource "aws_iam_role_policy" "ecs_logs" {
  count = length(aws_cloudwatch_log_group.this) > 0 ? 1 : 0

  name   = "logs"
  role   = aws_iam_role.ecs.id
  policy = data.aws_iam_policy_document.ecs_logs.json
}

data "aws_iam_policy_document" "ecs_logs" {
  statement {
    effect = "Allow"
    actions = [
      "logs:CreateLogStream",
      "logs:PutLogEvents",
      "logs:DescribeLogStreams"
    ]
    resources = concat(
      [for l in aws_cloudwatch_log_group.this : l.arn],
      [for l in aws_cloudwatch_log_group.this : "${l.arn}:*:*"]
    )
  }
}

resource "aws_iam_role_policy" "ecs_ssm" {
  name   = "ssm"
  role   = aws_iam_role.ecs.id
  policy = data.aws_iam_policy_document.ecs_ssm.json
}

data "aws_iam_policy_document" "ecs_ssm" {
  statement {
    effect    = "Allow"
    actions   = ["ssm:GetParameters"]
    resources = ["arn:aws:ssm:*:*:parameter/${var.name}/*"]
  }

  statement {
    effect    = "Allow"
    actions   = ["kms:Decrypt"]
    resources = ["*"]
  }
}
