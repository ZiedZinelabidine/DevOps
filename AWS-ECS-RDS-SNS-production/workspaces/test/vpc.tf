module "aws_vpc" {
  source = "../../modules/aws_vpc"

  name = local.environment

  cidr_block = "10.16.0.0/18"

  enable_cost_savings = true
}
