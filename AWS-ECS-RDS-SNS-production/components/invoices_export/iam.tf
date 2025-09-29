###
# ECS Scheduled Task
##
resource "aws_iam_role_policy" "s3" {
  name   = "s3"
  role   = module.aws_ecs_scheduled_task.iam_role.name
  policy = data.aws_iam_policy_document.s3.json
}

data "aws_iam_policy_document" "s3" {
  statement {
    effect = "Allow"
    actions = [
      "s3:PutObject",
    ]
    resources = ["${aws_s3_bucket.this.arn}/*"]
  }
}

###
# Service Account for Aptetude
##
resource "aws_iam_user" "aptetude" {
  name = "aptetude-sa"
}

resource "aws_iam_user_policy" "aptetude" {
  user   = aws_iam_user.aptetude.name
  policy = data.aws_iam_policy_document.aptetude.json
}

data "aws_iam_policy_document" "aptetude" {
  statement {
    effect = "Allow"
    actions = [
      "s3:GetObject",
      "s3:DeleteObject",
    ]
    resources = ["${aws_s3_bucket.this.arn}/*"]
  }

  statement {
    effect = "Allow"
    actions = [
      "s3:ListBucket",
    ]
    resources = [aws_s3_bucket.this.arn]
  }
}
