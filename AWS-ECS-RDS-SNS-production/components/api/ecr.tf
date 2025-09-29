module "aws_ecr_repository" {
  source = "../../modules/aws_ecr_repository"

  name = local.name
}
