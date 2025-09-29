data "terraform_remote_state" "aws_organization" {
  backend = "s3"

  config = {
    bucket = "saveursetvie-organization-terraform"
    key    = "tfstates/infrastructure/aws-organization.tfstate"
    region = "eu-west-3"
  }
}
