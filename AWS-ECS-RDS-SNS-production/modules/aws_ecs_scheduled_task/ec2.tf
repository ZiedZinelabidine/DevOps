resource "aws_security_group" "this" {
  name   = "${var.name}-ecs"
  vpc_id = data.aws_subnet.this.vpc_id
}
