resource "aws_iam_role" "lambda_cognito" {
  name               = "lambda-cognito"
  assume_role_policy = data.aws_iam_policy_document.lambda_cognito_sts.json
}

data "aws_iam_policy_document" "lambda_cognito_sts" {
  statement {
    effect = "Allow"
    principals {
      type        = "Service"
      identifiers = ["lambda.amazonaws.com"]
    }
    actions = ["sts:AssumeRole"]
  }
}

resource "aws_iam_role_policy_attachment" "lambda_cognito_lambda_execution" {
  role       = aws_iam_role.lambda_cognito.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

resource "aws_iam_role_policy" "lambda_cognito_cognito" {
  name   = "cognito"
  role   = aws_iam_role.lambda_cognito.name
  policy = data.aws_iam_policy_document.lambda_cognito_cognito.json
}

data "aws_iam_policy_document" "lambda_cognito_cognito" {
  statement {
    effect = "Allow"
    actions = [
      "cognito-identity:Describe*",
      "cognito-identity:Get*",
      "cognito-identity:List*",
      "cognito-idp:Describe*",
      "cognito-idp:AdminGet*",
      "cognito-idp:AdminList*",
      "cognito-idp:List*",
      "cognito-idp:Get*",
      "cognito-sync:Describe*",
      "cognito-sync:Get*",
      "cognito-sync:List*",
      "cognito-idp:AdminSetUserPassword"
    ]
    resources = ["*"]
  }
}
