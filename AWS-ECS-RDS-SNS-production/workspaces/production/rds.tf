resource "aws_db_subnet_group" "this" {
  name       = "default-aurora-cluster"
  subnet_ids = module.aws_vpc.subnet_ids["database"]
}

module "aws_rds_cluster_psql12" {
  source = "../../modules/aws_rds_cluster"

  name = "${local.environment}-aurora-psql12"

  vpc_id                     = module.aws_vpc.id
  db_subnet_group_name       = aws_db_subnet_group.this.name
  additional_security_groups = [module.aws_vpc.aws_default_security_group]

  database_name   = local.name
  master_username = local.name
}
