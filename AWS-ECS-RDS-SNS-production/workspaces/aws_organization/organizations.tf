resource "aws_organizations_organization" "this" {
  aws_service_access_principals = [
    "cloudtrail.amazonaws.com",
  ]

  enabled_policy_types = [
    "SERVICE_CONTROL_POLICY"
  ]
}

resource "aws_organizations_organizational_unit" "environments" {
  name      = "Saveurs et Vie (Environments)"
  parent_id = aws_organizations_organization.this.roots[0].id
}

###
# AWS Accounts
##
resource "aws_organizations_account" "organization" {
  name  = "Saveurs et Vie (AWS Organization)"
  email = "aws+organization@saveursetvie.fr"
}

resource "aws_organizations_account" "test" {
  name      = "Saveurs et Vie (Test)"
  parent_id = aws_organizations_organizational_unit.environments.id
  email     = "aws+test@saveursetvie.fr"
}

resource "aws_organizations_account" "production" {
  name      = "Saveurs et Vie (Production)"
  parent_id = aws_organizations_organizational_unit.environments.id
  email     = "aws+production@saveursetvie.fr"
}

###
# SCP - Allow only required components in AWS Environment Accounts.
##
resource "aws_organizations_policy" "deny_all_in_environments" {
  name = "deny-all-unused-components-in-aws-environments"

  content = data.aws_iam_policy_document.deny_all_in_environments.json
}

data "aws_iam_policy_document" "deny_all_in_environments" {
  statement {
    effect = "Deny"

    actions = [
      "acm:*",
      "cloudfront:*",
      "cloudwatch:*", # Required for CloudFront metrics
      "kms:*"
    ]

    resources = ["*"]

    condition {
      test     = "StringNotEquals"
      variable = "aws:RequestedRegion"
      values = [
        "eu-west-3", # Paris
        "us-east-1"  # Required for Cloudfront certificates
      ]
    }
  }

  statement {
    effect = "Deny"

    actions = [
      "cloudtrail:*",
      "cognito:*",
      "cognito-idp:*",
      "ec2:*",
      "ecr:*",
      "ecs:*",
      "transfer:*",
      "elasticloadbalancing:*",
      "events:*",
      "lambda:*",
      "logs:*",
      "s3:*",
      "rds:*",
      "ses:*",
      "ssm:*",
      "vpc:*",
    ]

    resources = ["*"]

    condition {
      test     = "StringNotEquals"
      variable = "aws:RequestedRegion"
      values   = ["eu-west-3"]
    }
  }

  statement {
    effect = "Deny"

    not_actions = [
      "account:*",
      "billing:*",
      "budgets:*",
      "cur:*",
      "iam:*",
      "organizations:*",
      "route53:*",
      "purchase-orders:*",
      "savingsplans:*",
      "support:*",
      "transfer:*",
      "supportplans:*",
      "sts:*",
      "tax:*",
      # Restricted above
      "acm:*",
      "kms:*",
      "cloudfront:*",
      "cloudtrail:*",
      "cloudwatch:*",
      "cognito:*",
      "cognito-idp:*",
      "ec2:*",
      "ecr:*",
      "ecs:*",
      "elasticloadbalancing:*",
      "events:*",
      "lambda:*",
      "logs:*",
      "rds:*",
      "s3:*",
      "ses:*",
      "ssm:*",
      "vpc:*",
    ]

    resources = ["*"]
  }
}

resource "aws_organizations_policy_attachment" "deny_all_in_environments" {
  policy_id = aws_organizations_policy.deny_all_in_environments.id
  target_id = aws_organizations_organizational_unit.environments.id
}

###
# SCP - Prevent accounts to leave AWS Organization
##
resource "aws_organizations_policy" "deny_leaving_organization" {
  name    = "deny-leaving-organization"
  content = data.aws_iam_policy_document.deny_leaving_organization.json
}

data "aws_iam_policy_document" "deny_leaving_organization" {
  statement {
    effect    = "Deny"
    actions   = ["organizations:LeaveOrganization"]
    resources = ["*"]
  }
}

resource "aws_organizations_policy_attachment" "deny_leaving_organization" {
  policy_id = aws_organizations_policy.deny_leaving_organization.id
  target_id = aws_organizations_organizational_unit.environments.id
}

###
# SCP - Prevent Root Account usage.
##
resource "aws_organizations_policy" "deny_root_account" {
  name = "deny-root-account"

  content = data.aws_iam_policy_document.deny_root_account.json
}

data "aws_iam_policy_document" "deny_root_account" {
  statement {
    effect    = "Deny"
    actions   = ["*"]
    resources = ["*"]

    condition {
      test     = "StringLike"
      variable = "aws:PrincipalArn"
      values   = ["arn:aws:iam::*:root"]
    }
  }
}

resource "aws_organizations_policy_attachment" "deny_root_account" {
  policy_id = aws_organizations_policy.deny_root_account.id
  target_id = aws_organizations_organizational_unit.environments.id
}
