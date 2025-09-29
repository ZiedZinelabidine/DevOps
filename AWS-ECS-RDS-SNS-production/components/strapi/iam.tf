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

###
# @TODO need to move to instance profile so we can remove user
##
resource "aws_iam_user" "this" {
  name = "strapi"
}

resource "aws_iam_access_key" "this" {
  user = aws_iam_user.this.name
}

resource "aws_iam_user_policy" "s3" {
  name   = "s3"
  user   = aws_iam_user.this.name
  policy = data.aws_iam_policy_document.s3.json
}

resource "aws_ssm_parameter" "user_access_key" {
  name  = "/${local.name}/aws/secret-access-key"
  type  = "SecureString"
  value = aws_iam_access_key.this.secret
}
### @TODO END - to be removed
