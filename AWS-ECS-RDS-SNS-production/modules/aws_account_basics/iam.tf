resource "aws_iam_account_alias" "this" {
  account_alias = var.name
}

resource "aws_iam_account_password_policy" "this" {
  minimum_password_length      = 14
  require_lowercase_characters = true
  require_numbers              = true
  require_uppercase_characters = true
  require_symbols              = true

  max_password_age               = 180
  password_reuse_prevention      = 5
  allow_users_to_change_password = true
}

resource "aws_iam_group" "administrators" {
  name = "administrators"
}

resource "aws_iam_group_membership" "administrators" {
  name  = "tf-administrators-membership"
  group = aws_iam_group.administrators.name

  users = var.aws_iam_super_users
}

resource "aws_iam_group_policy_attachment" "administrators_admin_access" {
  group      = aws_iam_group.administrators.name
  policy_arn = "arn:aws:iam::aws:policy/AdministratorAccess"
}
