resource "aws_security_group_rule" "ecs_http_inbound_from_lb" {
  security_group_id = module.aws_ecs_service.security_group_id
  type              = "ingress"
  description       = "Allow inbound traffic from ALB to ECS (${local.name})"

  from_port                = aws_lb_target_group.this.port
  to_port                  = aws_lb_target_group.this.port
  protocol                 = "tcp"
  source_security_group_id = var.load_balancer.security_group_id
}

resource "aws_security_group_rule" "lb_http_outbound_to_ecs" {
  security_group_id = var.load_balancer.security_group_id
  type              = "egress"
  description       = "Allow outbound traffic to ECS (${local.name})"

  from_port                = aws_lb_target_group.this.port
  to_port                  = aws_lb_target_group.this.port
  protocol                 = "tcp"
  source_security_group_id = module.aws_ecs_service.security_group_id
}
