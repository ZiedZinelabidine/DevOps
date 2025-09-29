resource "aws_budgets_budget" "monthly" {
  name              = "Monthly Budget Costs (${var.name})"
  budget_type       = "COST"
  limit_amount      = var.monthly_budget.limit_amount
  limit_unit        = "USD"
  time_period_start = "2017-07-01_00:00"
  time_unit         = "MONTHLY"

  notification {
    comparison_operator        = "GREATER_THAN"
    threshold                  = 90
    threshold_type             = "PERCENTAGE"
    notification_type          = "ACTUAL"
    subscriber_email_addresses = var.monthly_budget.subscriber_email_addresses
  }

  notification {
    comparison_operator        = "GREATER_THAN"
    threshold                  = 100
    threshold_type             = "PERCENTAGE"
    notification_type          = "FORECASTED"
    subscriber_email_addresses = var.monthly_budget.subscriber_email_addresses
  }
}
