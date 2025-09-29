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

  statement {
    effect = "Allow"
    actions = [
      "kms:GenerateDataKey",
      "kms:Decrypt",
    ]
    resources = [aws_kms_key.this.arn]
  }
}

###
# Service Account for Keyrus
##
resource "aws_iam_user" "keyrus" {
  name = "keyrus-sa"
}

resource "aws_iam_user_policy" "keyrus" {
  user   = aws_iam_user.keyrus.name
  policy = data.aws_iam_policy_document.keyrus.json
}

data "aws_iam_policy_document" "keyrus" {
  statement {
    effect = "Allow"
    actions = [
      "s3:GetObject",
      "s3:GetObjectVersion",
    ]
    resources = ["${aws_s3_bucket.this.arn}/*"]
  }

  statement {
    effect = "Allow"
    actions = [
      "kms:Decrypt",
    ]
    resources = [aws_kms_key.this.arn]
  }
}
