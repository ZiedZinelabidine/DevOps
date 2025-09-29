output "admin" {
  value = {
    user_pool_id        = aws_cognito_user_pool.admin.id
    user_pool_client_id = aws_cognito_user_pool_client.admin.id
  }
}

output "user" {
  value = {
    user_pool_id        = aws_cognito_user_pool.user.id
    user_pool_client_id = aws_cognito_user_pool_client.user.id
  }
}
