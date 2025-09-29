resource "aws_ssm_parameter" "admin_cognito_user_pool_client_id" {
  name  = "/${local.name}/cognito/admin-user-pool-client-id"
  type  = "SecureString"
  value = var.cognito.admin_user_pool_client_id
}
