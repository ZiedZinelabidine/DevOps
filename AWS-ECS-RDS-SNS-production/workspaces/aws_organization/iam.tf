###
# Users
##
resource "aws_iam_user" "gitlab_infrastructure" {
  name          = "gitlab-infrastructure"
  force_destroy = true # To allow deletion despite of the API Keys

  lifecycle {
    prevent_destroy = true
  }
}

resource "aws_iam_user" "zied_zinelabidine" {
  name          = "zied.zinelabidine"
  force_destroy = true # To allow deletion despite of the API Keys

  lifecycle {
    prevent_destroy = true
  }
}

resource "aws_iam_user" "julie_burgy" {
  name          = "julie.burgy"
  force_destroy = true # To allow deletion despite of the API Keys

  lifecycle {
    prevent_destroy = true
  }
}

resource "aws_iam_user" "ange_tailly" {
  name          = "ange.tailly"
  force_destroy = true # To allow deletion despite of the API Keys

  lifecycle {
    prevent_destroy = true
  }
}

resource "aws_iam_user" "laure_cordera" {
  name          = "laure.cordera"
  force_destroy = true # To allow deletion despite of the API Keys

  lifecycle {
    prevent_destroy = true
  }
}

resource "aws_iam_user" "maxence_reveret" {
  name          = "maxence.reveret"
  force_destroy = true # To allow deletion despite of the API Keys

  lifecycle {
    prevent_destroy = true
  }
}

resource "aws_iam_user" "ahmadou-waly_ndiaye" {
  name          = "ahmadou-waly.ndiaye"
  force_destroy = true # To allow deletion despite of the API Keys

  lifecycle {
    prevent_destroy = true
  }
}

###
# Groups
##
resource "aws_iam_group" "users" {
  name = "users"
}

resource "aws_iam_group_membership" "users" {
  name  = "tf-users-membership"
  group = aws_iam_group.users.name

  users = [
    aws_iam_user.zied_zinelabidine.name,
    aws_iam_user.julie_burgy.name,
    aws_iam_user.ange_tailly.name,
    aws_iam_user.laure_cordera.name,
    aws_iam_user.maxence_reveret.name,
    aws_iam_user.ahmadou-waly_ndiaye.name,
  ]
}

resource "aws_iam_group_policy" "users_iam_access" {
  name  = "iam-access"
  group = aws_iam_group.users.name

  policy = data.aws_iam_policy_document.users_iam_access.json
}

data "aws_iam_policy_document" "users_iam_access" {
  statement {
    effect = "Allow"
    actions = [
      "iam:ListUsers",
      "iam:GetAccountPasswordPolicy"
    ]
    resources = ["*"]
  }

  statement {
    effect = "Allow"
    actions = [
      "iam:ListMFADevices"
    ]
    resources = [
      "arn:aws:iam::*:mfa/*",
      "arn:aws:iam::*:user/$${aws:username}"
    ]
  }

  statement {
    effect = "Allow"
    actions = [
      "iam:CreateVirtualMFADevice",
      "iam:EnableMFADevice",
      "iam:ResyncMFADevice"
    ]
    resources = [
      "arn:aws:iam::*:mfa/$${aws:username}",
      "arn:aws:iam::*:user/$${aws:username}"
    ]
  }

  statement {
    effect = "Allow"
    actions = [
      "iam:CreateAccessKey*",
      "iam:ListAccessKey*",
      "iam:UpdateAccessKey",
      "iam:ChangePassword",
      "iam:GetUser",
      "iam:GetLoginProfile",
      "iam:UpdateLoginProfile",
    ]
    resources = ["arn:aws:iam::*:user/$${aws:username}"]
  }
}

resource "aws_iam_group" "clients" {
  name = "clients"
  path = "/users/"
}

resource "aws_iam_group_membership" "clients" {
  name  = "tf-clients-membership"
  group = aws_iam_group.clients.name

  users = [
    aws_iam_user.julie_burgy.name,
    aws_iam_user.ange_tailly.name,
    aws_iam_user.laure_cordera.name,
  ]
}

resource "aws_iam_group_policy_attachment" "clients_billing" {
  group      = aws_iam_group.clients.name
  policy_arn = "arn:aws:iam::aws:policy/job-function/Billing"
}

resource "aws_iam_group_policy" "clients_additional_permissions" {
  name   = "additional-permissions"
  group  = aws_iam_group.clients.name
  policy = data.aws_iam_policy_document.clients_additional_permissions.json
}

data "aws_iam_policy_document" "clients_additional_permissions" {
  statement {
    effect = "Allow"
    actions = [
      "account:GetAlternateContact",
      "account:GetContactInformation",
    ]
    resources = ["*"]
  }
}

resource "aws_iam_group" "tcm_developpers" {
  name = "tcm-developpers"
  path = "/users/"
}

resource "aws_iam_group_membership" "tcm_developpers" {
  name  = "tf-tcm-developpers-membership"
  group = aws_iam_group.tcm_developpers.name

  users = [
    aws_iam_user.maxence_reveret.name,
    aws_iam_user.ahmadou-waly_ndiaye.name,
  ]
}

resource "aws_iam_group_policy" "tcm_developpers_sts" {
  name   = "assume-role-permissions"
  group  = aws_iam_group.tcm_developpers.name
  policy = data.aws_iam_policy_document.tcm_developpers_sts.json
}

data "aws_iam_policy_document" "tcm_developpers_sts" {
  statement {
    effect  = "Allow"
    actions = ["sts:AssumeRole"]
    resources = [
      "arn:aws:iam::${data.terraform_remote_state.test.outputs.account_id}:role/TCMDeveloppersRole",
      "arn:aws:iam::${data.terraform_remote_state.production.outputs.account_id}:role/TCMDeveloppersRole",
    ]
  }
}
