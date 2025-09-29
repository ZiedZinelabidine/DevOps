resource "aws_ssm_parameter" "database_password" {
  name  = "/${local.name}/database/password"
  type  = "SecureString"
  value = "changeme"

  lifecycle {
    ignore_changes  = [value]
    prevent_destroy = true
  }
}

resource "aws_ssm_parameter" "azure_passphrase" {
  name  = "/${local.name}/azure/passphrase"
  type  = "SecureString"
  value = "changeme"

  lifecycle {
    ignore_changes  = [value]
    prevent_destroy = true
  }
}

resource "aws_ssm_parameter" "payment_company_key" {
  name  = "/${local.name}/payment/company-key"
  type  = "SecureString"
  value = "changeme"

  lifecycle {
    ignore_changes  = [value]
    prevent_destroy = true
  }
}

resource "aws_ssm_parameter" "svo_payment_company_key" {
  name  = "/${local.name}/payment/svo-company-key"
  type  = "SecureString"
  value = "changeme"

  lifecycle {
    ignore_changes  = [value]
    prevent_destroy = true
  }
}

resource "aws_ssm_parameter" "svc_payment_company_key" {
  name  = "/${local.name}/payment/svc-ompany-key"
  type  = "SecureString"
  value = "changeme"

  lifecycle {
    ignore_changes  = [value]
    prevent_destroy = true
  }
}
