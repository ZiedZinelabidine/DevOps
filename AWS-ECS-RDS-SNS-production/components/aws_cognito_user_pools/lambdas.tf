###
# The lambda function code isn't managed by terraform.
# Here is just a dump zip file so we can create the functions
##
data "archive_file" "dumb" {
  type        = "zip"
  output_path = "${path.module}/dump.zip"

  source {
    content  = "IGNORED"
    filename = "index.js"
  }
}

resource "aws_lambda_function" "cognito_post_confirmation_trigger" {
  filename      = data.archive_file.dumb.output_path
  function_name = "production-post-confirmation-cognito-trigger"
  handler       = "index.handler"
  role          = aws_iam_role.lambda_cognito.arn
  runtime       = "nodejs16.x"
  timeout       = "10"
  memory_size   = "128"

  lifecycle {
    prevent_destroy = true
    ignore_changes  = [filename]
  }
}

resource "aws_lambda_permission" "cognito_post_confirmation_trigger" {
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.cognito_post_confirmation_trigger.function_name
  principal     = "cognito-idp.amazonaws.com"
  source_arn    = aws_cognito_user_pool.user.arn
}

resource "aws_lambda_function" "cognito_custom_message_trigger" {
  filename      = data.archive_file.dumb.output_path
  function_name = "production-custom-message-cognito-trigger"
  handler       = "index.handler"
  role          = aws_iam_role.lambda_cognito.arn
  runtime       = "nodejs16.x"
  timeout       = "10"
  memory_size   = "128"

  environment {
    variables = {
      BASE_EMAIL_REDIRECT_URL = var.base_email_redirect_url
    }
  }

  lifecycle {
    prevent_destroy = true
    ignore_changes  = [filename]
  }
}

resource "aws_lambda_permission" "cognito_custom_message_trigger" {
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.cognito_custom_message_trigger.function_name
  principal     = "cognito-idp.amazonaws.com"
  source_arn    = aws_cognito_user_pool.user.arn
}

resource "aws_lambda_function" "cognito_pre_sign_up_trigger" {
  filename      = data.archive_file.dumb.output_path
  function_name = "production-pre-sign-up-cognito-trigger"
  handler       = "index.handler"
  role          = aws_iam_role.lambda_cognito.arn
  runtime       = "nodejs16.x"
  timeout       = "10"
  memory_size   = "128"

  lifecycle {
    prevent_destroy = true
    ignore_changes  = [filename]
  }
}

resource "aws_lambda_permission" "cognito_pre_sign_up_trigger" {
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.cognito_pre_sign_up_trigger.function_name
  principal     = "cognito-idp.amazonaws.com"
  source_arn    = aws_cognito_user_pool.user.arn
}
