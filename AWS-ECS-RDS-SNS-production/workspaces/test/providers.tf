provider "aws" {
  region = "eu-west-3"

  assume_role {
    # AWS Production
    role_arn     = "arn:aws:iam::457606483614:role/OrganizationAccountAccessRole"
    session_name = "terraform"
  }
}

provider "aws" {
  region = "us-east-1"
  alias  = "us_east_1"

  assume_role {
    # AWS Production
    role_arn     = "arn:aws:iam::457606483614:role/OrganizationAccountAccessRole"
    session_name = "terraform"
  }
}
