resource "aws_iam_role_policy" "s3" {
  name   = "s3"
  role   = module.aws_ecs_service.iam_role.name
  policy = data.aws_iam_policy_document.s3.json
}

data "aws_iam_policy_document" "s3" {
  statement {
    effect = "Allow"
    actions = [
      "s3:DeleteObject",
      "s3:GetObject",
      "s3:PutObject",
      "s3:PutObjectAcl"
    ]
    resources = ["${aws_s3_bucket.this.arn}/*"]
  }
}

resource "aws_iam_role_policy" "ses" {
  name   = "ses"
  role   = module.aws_ecs_service.iam_role.name
  policy = data.aws_iam_policy_document.ses.json
}

data "aws_iam_policy_document" "ses" {
  statement {
    effect = "Allow"
    actions = [
      "ses:SendEmail",
      "ses:SendRawEmail"
    ]
    resources = [var.aws_ses_domain_identity_arn]
  }
}
