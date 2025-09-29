resource "aws_lb_target_group" "this" {
  name   = "${local.name}-ecs"
  vpc_id = var.network_configuration.vpc_id

  slow_start  = 30
  target_type = "ip"
  protocol    = "HTTP"
  port        = 3000

  health_check {
    path                = "/health"
    unhealthy_threshold = 2
    healthy_threshold   = 3
    matcher             = "200"
  }
}
