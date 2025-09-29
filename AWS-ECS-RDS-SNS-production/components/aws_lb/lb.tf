resource "aws_lb" "this" {
  name               = var.name
  load_balancer_type = "application"

  security_groups = [aws_security_group.this.id]
  subnets         = var.subnets
}


resource "aws_lb_listener" "http" {
  load_balancer_arn = aws_lb.this.arn
  port              = "80"
  protocol          = "HTTP"

  default_action {
    type = "redirect"

    redirect {
      port        = 443
      protocol    = "HTTPS"
      status_code = "HTTP_301"
    }
  }
}

resource "aws_lb_listener" "https" {
  load_balancer_arn = aws_lb.this.arn
  port              = "443"
  protocol          = "HTTPS"

  ssl_policy      = "ELBSecurityPolicy-TLS-1-2-Ext-2018-06"
  certificate_arn = aws_acm_certificate.www2.arn

  default_action {
    type = "fixed-response"

    fixed_response {
      content_type = "text/plain"
      status_code  = "403"
    }
  }
}

resource "aws_lb_listener_certificate" "api" {
  listener_arn    = aws_lb_listener.https.arn
  certificate_arn = aws_acm_certificate.api.arn
}

resource "aws_lb_listener_certificate" "strapi" {
  listener_arn    = aws_lb_listener.https.arn
  certificate_arn = aws_acm_certificate.strapi.arn
}

resource "aws_lb_listener_certificate" "admin" {
  listener_arn    = aws_lb_listener.https.arn
  certificate_arn = aws_acm_certificate.admin.arn
}
