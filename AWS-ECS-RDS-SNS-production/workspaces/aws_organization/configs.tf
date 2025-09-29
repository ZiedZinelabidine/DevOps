data "aws_caller_identity" "current" {}

data "aws_region" "current" {}

locals {
  name = "saveursetvie-organization"
}

module "aws_account_basics" {
  source = "../../modules/aws_account_basics"

  name = local.name
  monthly_budget = {
    limit_amount = "750.0"
    subscriber_email_addresses = [
      "aws+organization@saveursetvie.fr",
    ]
  }

  aws_iam_super_users = [
    aws_iam_user.gitlab_infrastructure.name, # Used by Gitlab in Infrastructure repo.
    aws_iam_user.zied_zinelabidine.name,
  ]
}

module "aws_terraform_requirements" {
  source = "../../modules/aws_terraform_requirements"

  aws_account_name = local.name
}
