data "terraform_remote_state" "test" {
  backend = "s3"

  config = {
    bucket = "saveursetvie-organization-terraform"
    key    = "tfstates/infrastructure/test.tfstate"
    region = "eu-west-3"
  }
}

data "terraform_remote_state" "production" {
  backend = "s3"

  config = {
    bucket = "saveursetvie-organization-terraform"
    key    = "tfstates/infrastructure/production.tfstate"
    region = "eu-west-3"
  }
}
