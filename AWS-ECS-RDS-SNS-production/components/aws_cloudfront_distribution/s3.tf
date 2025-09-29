resource "aws_s3_bucket" "logs" {
  bucket = "${var.log_bucket_prefix}cloudfront-logs"

  lifecycle {
    prevent_destroy = true
  }
}


resource "aws_s3_bucket_acl" "logs" {
  bucket = aws_s3_bucket.logs.id

  access_control_policy {
    grant {
      # Grant CloudFront logs access to S3 Bucket
      # https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AccessLogs.html#AccessLogsBucketAndFileOwnership
      grantee {
        id   = "c4c1ede66af53448b93c283ce9448c4ba468c9432aa01d700d3878632f77d2d0"
        type = "CanonicalUser"
      }
      permission = "FULL_CONTROL"
    }

    owner {
      id = data.aws_canonical_user_id.current.id
    }
  }
}

resource "aws_s3_bucket_lifecycle_configuration" "logs" {
  bucket = aws_s3_bucket.logs.bucket

  rule {
    id     = "tf-delete-old-versions-after-365-days"
    status = "Enabled"

    expiration {
      days = 365
    }

    noncurrent_version_expiration {
      noncurrent_days = 10
    }
  }
}

resource "aws_s3_bucket_public_access_block" "logs" {
  bucket = aws_s3_bucket.logs.bucket

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}
