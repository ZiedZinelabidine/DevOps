resource "aws_lb_listener_rule" "frontend" {
  listener_arn = aws_lb_listener.https.arn
  priority     = 100

  action {
    type             = "forward"
    target_group_arn = var.frontend.target_group_arn
  }

  condition {
    host_header {
      values = [var.frontend.host_header]
    }
  }

  condition {
    path_pattern {
      values = [
        "/commande-en-ligne*",
      ]
    }
  }

  condition {
    http_header {
      http_header_name = "Custom-X-Token"
      values           = [var.frontend.custom_x_token]
    }
  }
}

resource "aws_lb_listener_rule" "api" {
  listener_arn = aws_lb_listener.https.arn
  priority     = 200

  action {
    type             = "forward"
    target_group_arn = var.api.target_group_arn
  }

  condition {
    host_header {
      values = [aws_acm_certificate.api.domain_name]
    }
  }
}

resource "aws_lb_listener_rule" "marketing_pages" {
  listener_arn = aws_lb_listener.https.arn
  priority     = 300

  action {
    type             = "forward"
    target_group_arn = var.marketing_pages.target_group_arn
  }

  condition {
    host_header {
      values = [var.marketing_pages.host_header]
    }
  }

  condition {
    http_header {
      http_header_name = "Custom-X-Token"
      values           = [var.marketing_pages.custom_x_token]
    }
  }
}

resource "aws_lb_listener_rule" "strapi" {
  listener_arn = aws_lb_listener.https.arn
  priority     = 400

  action {
    type             = "forward"
    target_group_arn = var.strapi.target_group_arn
  }

  condition {
    host_header {
      values = [aws_acm_certificate.strapi.domain_name]
    }
  }

  condition {
    path_pattern {
      values = [
        "/?*",
      ]
    }
  }
}

resource "aws_lb_listener_rule" "admin" {
  listener_arn = aws_lb_listener.https.arn
  priority     = 500

  action {
    type             = "forward"
    target_group_arn = var.admin.target_group_arn
  }

  condition {
    host_header {
      values = [aws_acm_certificate.admin.domain_name]
    }
  }
}
