resource "aws_ssm_parameter" "database_password" {
  name  = "/${local.name}/database/password"
  type  = "SecureString"
  value = "changeme"

  lifecycle {
    ignore_changes  = [value]
    prevent_destroy = true
  }
}
