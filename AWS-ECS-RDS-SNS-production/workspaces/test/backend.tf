terraform {
  backend "s3" {
    bucket  = "saveursetvie-organization-terraform"
    key     = "tfstates/infrastructure/test.tfstate"
    encrypt = true

    dynamodb_table = "terraform-locks"

    region = "eu-west-3"
  }
}
