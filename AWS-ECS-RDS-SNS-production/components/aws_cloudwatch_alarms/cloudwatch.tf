resource "aws_cloudwatch_metric_alarm" "alb_5xx" {
  alarm_name        = "ALB-5XX-count"
  alarm_description = "This metric monitors the number of 5XX errors on the ALB."

  namespace   = "AWS/ApplicationELB"
  metric_name = "HTTPCode_ELB_5XX_Count"
  dimensions = {
    "LoadBalancer" = var.aws_lb
  }
  statistic = "Sum"

  comparison_operator = "GreaterThanThreshold"
  threshold           = "1"
  evaluation_periods  = "5"
  period              = "60"
  datapoints_to_alarm = "2"
  treat_missing_data  = "notBreaching"
}

resource "aws_cloudwatch_metric_alarm" "ses_bounce" {
  alarm_name        = "SES-Bounce"
  alarm_description = "This metric monitors the number of Bounce from SES."

  namespace   = "AWS/SES"
  metric_name = "Bounce"
  statistic   = "Sum"

  comparison_operator = "GreaterThanThreshold"
  threshold           = "1"
  evaluation_periods  = "1"
  period              = "600"
  datapoints_to_alarm = "1"
  treat_missing_data  = "notBreaching"
}
