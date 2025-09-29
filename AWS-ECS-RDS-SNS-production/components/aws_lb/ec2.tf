resource "aws_security_group" "this" {
  name   = "${var.name}-lb"
  vpc_id = data.aws_subnet.this.vpc_id
}

resource "aws_security_group_rule" "http_inbound" {
  security_group_id = aws_security_group.this.id
  type              = "ingress"
  description       = "Allow inbound HTTP traffic from Internet to ALB"

  from_port   = 80
  to_port     = 80
  protocol    = "tcp"
  cidr_blocks = ["0.0.0.0/0"]
}

resource "aws_security_group_rule" "https_inbound" {
  security_group_id = aws_security_group.this.id
  type              = "ingress"
  description       = "Allow inbound HTTPS traffic from Internet to ALB"

  from_port   = 443
  to_port     = 443
  protocol    = "tcp"
  cidr_blocks = ["0.0.0.0/0"]
}
