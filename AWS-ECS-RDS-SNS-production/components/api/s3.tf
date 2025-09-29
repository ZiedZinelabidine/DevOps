resource "aws_s3_bucket" "this" {
  bucket = "${var.bucket_prefix}images"

  lifecycle {
    prevent_destroy = true
  }
}

resource "aws_s3_bucket_cors_configuration" "this" {
  bucket = aws_s3_bucket.this.id

  cors_rule {
    allowed_headers = var.cors_rule.allowed_headers
    allowed_methods = var.cors_rule.allowed_methods
    allowed_origins = var.cors_rule.allowed_origins
  }
}

resource "aws_s3_bucket_acl" "this" {
  bucket = aws_s3_bucket.this.id
  acl    = "public-read"
}

resource "aws_s3_bucket_versioning" "this" {
  bucket = aws_s3_bucket.this.bucket

  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_policy" "this" {
  bucket = aws_s3_bucket.this.bucket
  policy = data.aws_iam_policy_document.bucket.json
}

data "aws_iam_policy_document" "bucket" {
  statement {
    effect    = "Allow"
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.this.arn}/pictures/*"]
    principals {
      type        = "AWS"
      identifiers = [var.cloudfront_distribution_origin_access_identity]
    }
    principals { # @TODO to remove
      type        = "*"
      identifiers = ["*"]
    }
  }
}
