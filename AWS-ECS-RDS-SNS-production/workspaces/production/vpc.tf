module "aws_vpc" {
  source = "../../modules/aws_vpc"

  name       = local.environment
  cidr_block = "10.0.0.0/18"
}
