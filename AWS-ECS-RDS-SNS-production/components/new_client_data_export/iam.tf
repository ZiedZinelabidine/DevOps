###
# ECS Scheduled Task
##
resource "aws_iam_role_policy" "ses" {
  name   = "ses"
  role   = module.aws_ecs_scheduled_task.iam_role.name
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
