data "aws_caller_identity" "current" {}

data "aws_region" "current" {}

locals {
  name        = "saveursetvie"
  environment = "test"
  tld         = "${local.environment}.${local.name}.fr"
}

module "aws_account_basics" {
  source = "../../modules/aws_account_basics"

  name = "${local.name}-${local.environment}"
  monthly_budget = {
    limit_amount = "250.0"
    subscriber_email_addresses = [
      "aws+test@saveursetvie.fr",
    ]
  }
}
