resource "aws_security_group_rule" "ecs_postgres_outbound_to_rds" {
  security_group_id = module.aws_ecs_scheduled_task.security_group_id
  type              = "egress"
  description       = "Allow outbound traffic to PostgreSQL instance"

  from_port                = var.database.port
  to_port                  = var.database.port
  protocol                 = "tcp"
  source_security_group_id = var.database.security_group_id
}

resource "aws_security_group_rule" "rds_postgres_inbound_from_ecs" {
  security_group_id = var.database.security_group_id
  type              = "ingress"
  description       = "Allow inbound traffic to from ECS (${local.name})"

  from_port                = var.database.port
  to_port                  = var.database.port
  protocol                 = "tcp"
  source_security_group_id = module.aws_ecs_scheduled_task.security_group_id
}
