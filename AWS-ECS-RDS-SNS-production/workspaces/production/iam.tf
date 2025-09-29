data "aws_iam_policy_document" "sts_from_organization" {
  statement {
    effect  = "Allow"
    actions = ["sts:AssumeRole"]
    principals {
      type        = "AWS"
      identifiers = ["arn:aws:iam::${data.terraform_remote_state.aws_organization.outputs.account_id}:root"]
    }
  }
}

resource "aws_iam_user" "gitlab_apps" {
  name = "gitlab-apps"
}

resource "aws_iam_user_policy" "gitlab_apps_lambda" {
  name   = "lambda"
  user   = aws_iam_user.gitlab_apps.name
  policy = data.aws_iam_policy_document.gitlab_apps_lambda.json
}

data "aws_iam_policy_document" "gitlab_apps_lambda" {
  statement {
    effect = "Allow"
    actions = [
      "lambda:UpdateFunctionCode"
    ]
    resources = ["arn:aws:lambda:eu-west-3:*:function:*"]
  }
}

resource "aws_iam_user_policy_attachment" "gitlab_apps_ecr" {
  user       = aws_iam_user.gitlab_apps.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryPowerUser"
}

resource "aws_iam_user_policy_attachment" "gitlab_apps_ecs" {
  user       = aws_iam_user.gitlab_apps.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonECS_FullAccess"
}

resource "aws_iam_user_policy" "gitlab_s3" {
  user   = aws_iam_user.gitlab_apps.name
  policy = data.aws_iam_policy_document.gitlab_s3.json
}

data "aws_iam_policy_document" "gitlab_s3" {
  statement {
    effect    = "Allow"
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.ecs_task_definitions.arn}/*"]
  }
}

resource "aws_iam_user_policy" "gitlab_iam" {
  user   = aws_iam_user.gitlab_apps.name
  policy = data.aws_iam_policy_document.gitlab_iam.json
}

data "aws_iam_policy_document" "gitlab_iam" {
  statement {
    effect    = "Allow"
    actions   = ["iam:*"]
    resources = ["*"]
  }
}

resource "aws_iam_role" "tcm_developpers" {
  name               = "TCMDeveloppersRole"
  assume_role_policy = data.aws_iam_policy_document.sts_from_organization.json
}

resource "aws_iam_role_policy_attachment" "tcm_developpers_cw" {
  role       = aws_iam_role.tcm_developpers.name
  policy_arn = "arn:aws:iam::aws:policy/CloudWatchReadOnlyAccess"
}

resource "aws_iam_role_policy_attachment" "tcm_developpers_lambda" {
  role       = aws_iam_role.tcm_developpers.name
  policy_arn = "arn:aws:iam::aws:policy/AWSLambda_ReadOnlyAccess"
}

resource "aws_iam_role_policy_attachment" "tcm_developpers_ecr" {
  role       = aws_iam_role.tcm_developpers.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly"
}

resource "aws_iam_role_policy_attachment" "tcm_developpers_ses" {
  role       = aws_iam_role.tcm_developpers.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonSESReadOnlyAccess"
}

resource "aws_iam_role_policy" "tcm_developpers_awstransfer" {
  name   = "awstransfer"
  role   = aws_iam_role.tcm_developpers.name
  policy = data.aws_iam_policy_document.tcm_developpers_awstransfer.json
}

resource "aws_iam_role_policy" "tcm_developpers_ecs" {
  name   = "ecs-permissions"
  role   = aws_iam_role.tcm_developpers.name
  policy = data.aws_iam_policy_document.tcm_developpers_ecs.json
}

data "aws_iam_policy_document" "tcm_developpers_ecs" {
  statement {
    effect = "Allow"
    actions = [
      "ecs:Describe*",
      "ecs:List*",
    ]
    resources = ["*"]
  }
}

resource "aws_iam_role_policy" "tcm_developpers_admin" {
  name   = "admin-permissions"
  role   = aws_iam_role.tcm_developpers.name
  policy = data.aws_iam_policy_document.tcm_developpers_admin.json
}

data "aws_iam_policy_document" "tcm_developpers_admin" {
  statement {
    effect = "Allow"
    actions = [
      "*",
    ]
    resources = ["*"]
  }
}

data "aws_iam_policy_document" "tcm_developpers_awstransfer" {
  statement {
    effect = "Allow"
    actions = [
      "transfer:*",
    ]
    resources = ["*"]
  }
}

data "aws_iam_policy_document" "restore_db_to_s3" {
  statement {
    actions = ["sts:AssumeRole"]
    principals {
      type        = "Service"
      identifiers = ["export.rds.amazonaws.com"]
    }
  }
}

resource "aws_iam_role" "restore_db_to_s3" {
  name               = "restore_db_to_s3"
  assume_role_policy = data.aws_iam_policy_document.restore_db_to_s3.json
}

resource "aws_iam_role_policy_attachment" "role_for_restore_db_snap_s3" {
  role       = aws_iam_role.restore_db_to_s3.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonS3FullAccess"
}

resource "aws_iam_role" "transfer_to_s3" {
  name               = "transfer_to_s3"
  assume_role_policy = data.aws_iam_policy_document.transfer_to_s3.json
}

data "aws_iam_policy_document" "transfer_to_s3" {
  statement {
    actions = ["sts:AssumeRole"]
    principals {
      type        = "Service"
      identifiers = ["transfer.amazonaws.com"]
    }
  }
}
resource "aws_iam_role_policy_attachment" "transfer_to_s3" {
  role       = aws_iam_role.transfer_to_s3.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonS3FullAccess"
}
