terraform {
  backend "s3" {
    bucket  = "saveursetvie-organization-terraform"
    key     = "tfstates/infrastructure/aws-organization.tfstate"
    encrypt = true

    dynamodb_table = "terraform-locks"

    region = "eu-west-3"
  }
}
