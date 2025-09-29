module "jumphost" {
  source = "../../components/jumphost"

  subnet_id = module.aws_vpc.subnet_ids["public"][0]
}

resource "aws_security_group_rule" "rds_postgres_inbound_from_jumphost" {
  security_group_id = module.aws_rds_cluster_psql12.security_group_id
  type              = "ingress"
  description       = "Allow inbound traffic to from EC2 Jumphost"

  from_port                = module.aws_rds_cluster_psql12.port
  to_port                  = module.aws_rds_cluster_psql12.port
  protocol                 = "tcp"
  source_security_group_id = module.jumphost.security_group_id
}
