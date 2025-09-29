###
# Users
##
resource "aws_cognito_user_pool" "user" {
  name = "${var.name_prefix}users"

  username_attributes = ["email"]
  username_configuration {
    case_sensitive = false
  }

  admin_create_user_config {
    allow_admin_create_user_only = false
    invite_message_template {
      email_message = "Your username is {username} and temporary password is {####}."
      email_subject = "Welcome to the 'Saveurs et Vie'"
      sms_message   = "Your username is {username} and temporary password is {####}. "
    }
  }

  auto_verified_attributes   = ["email"]
  email_verification_message = "Votre code de vérification est {####} ."
  email_verification_subject = "Bienvenue aux 'Saveurs et Vie'"

  lambda_config {
    post_confirmation = aws_lambda_function.cognito_post_confirmation_trigger.arn
    custom_message    = aws_lambda_function.cognito_custom_message_trigger.arn
    pre_sign_up       = aws_lambda_function.cognito_pre_sign_up_trigger.arn
  }

  password_policy {
    minimum_length                   = 8
    require_lowercase                = true
    require_numbers                  = true
    require_symbols                  = true
    require_uppercase                = true
    temporary_password_validity_days = 365
  }

  account_recovery_setting {
    recovery_mechanism {
      priority = 1
      name     = "verified_email"
    }
  }

  schema {
    attribute_data_type = "String"
    name                = "email"
    required            = "true"

    string_attribute_constraints {
      min_length = 4
      max_length = 1024
    }
  }

  email_configuration {
    source_arn            = var.email_configuration.source_arn
    from_email_address    = var.email_configuration.from_email_address
    email_sending_account = "DEVELOPER"
  }

  user_pool_add_ons {
    advanced_security_mode = "OFF"
  }

  lifecycle {
    prevent_destroy = true
  }
}

resource "aws_cognito_user_pool_client" "user" {
  name         = "User app client"
  user_pool_id = aws_cognito_user_pool.user.id

  token_validity_units {
    access_token  = "minutes"
    id_token      = "minutes"
    refresh_token = "days"
  }
  access_token_validity  = 60
  id_token_validity      = 60
  refresh_token_validity = 30

  generate_secret = false
  explicit_auth_flows = [
    "ALLOW_REFRESH_TOKEN_AUTH",
    "ALLOW_USER_SRP_AUTH",
    "ALLOW_CUSTOM_AUTH",
    "ALLOW_ADMIN_USER_PASSWORD_AUTH"
  ]
  prevent_user_existence_errors = "ENABLED"
  read_attributes = [
    "email",
    "email_verified",
    "name",
    "phone_number",
    "phone_number_verified",
    "profile",
    "address",
    "address",
    "birthdate",
    "gender",
    "family_name",
    "given_name"

  ]

  supported_identity_providers = [
    "COGNITO"
  ]

  write_attributes = [
    "email",
    "name",
    "phone_number",
    "profile",
    "address",
    "birthdate",
    "gender",
    "family_name",
    "given_name"

  ]

  lifecycle {
    prevent_destroy = true
  }
}

###
# Admins
##
resource "aws_cognito_user_pool" "admin" {
  name                     = "${var.name_prefix}admins"
  username_attributes      = ["email"]
  auto_verified_attributes = ["email"]

  password_policy {
    minimum_length                   = 8
    require_lowercase                = true
    require_numbers                  = true
    require_symbols                  = true
    require_uppercase                = true
    temporary_password_validity_days = 7
  }

  account_recovery_setting {
    recovery_mechanism {
      priority = 1
      name     = "verified_email"
    }
  }

  schema {
    attribute_data_type = "String"
    name                = "email"
    required            = "true"

    string_attribute_constraints {
      min_length = 4
      max_length = 64
    }
  }

  verification_message_template {
    default_email_option = "CONFIRM_WITH_CODE"
  }

  email_configuration {
    source_arn            = var.email_configuration.source_arn
    from_email_address    = var.email_configuration.from_email_address
    email_sending_account = "DEVELOPER"
  }

  user_pool_add_ons {
    advanced_security_mode = "AUDIT"
  }

  lifecycle {
    prevent_destroy = true
  }
}

resource "aws_cognito_user_pool_client" "admin" {
  name            = "Cloud Admin 1.0"
  user_pool_id    = aws_cognito_user_pool.admin.id
  generate_secret = false

  explicit_auth_flows = [
    "ALLOW_REFRESH_TOKEN_AUTH",
    "ALLOW_CUSTOM_AUTH",
    "ALLOW_USER_PASSWORD_AUTH",
    "ALLOW_ADMIN_USER_PASSWORD_AUTH"
  ]

  supported_identity_providers = [
    "COGNITO"
  ]

  lifecycle {
    prevent_destroy = true
  }
}
