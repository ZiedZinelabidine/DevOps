module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "3.14.3"

  name = "main"
  cidr = "10.0.0.0/16"

  azs             = ["eu-west-1a", "eu-west-1b" , "eu-west-1c"]
  private_subnets = ["10.0.0.0/19", "10.0.2.0/19" , "10.0.4.0/19" ]
  public_subnets  = ["10.0.1.0/19", "10.0.3.0/19" , "10.0.5.0/19"  ]

  public_subnet_tags = {
    "kubernetes.io/role/elb" = "1"
  }

  private_subnet_tags = {
    "kubernetes.io/role/internal-elb" = "1"
  }

  enable_nat_gateway     = true
  single_nat_gateway     = true
  one_nat_gateway_per_az = false

  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = {
    Environment = "staging"
  }
}
