resource "aws_s3_bucket" "this" {
  bucket = "${var.bucket_prefix}${local.name}"

  lifecycle {
    prevent_destroy = true
  }
}

resource "aws_s3_bucket_lifecycle_configuration" "this" {
  bucket = aws_s3_bucket.this.bucket

  rule {
    id     = "tf-delete-old-versions-after-365-days"
    status = "Enabled"

    expiration {
      expired_object_delete_marker = true
    }

    abort_incomplete_multipart_upload {
      days_after_initiation = 7
    }

    noncurrent_version_expiration {
      noncurrent_days = 365
    }
  }
}

resource "aws_s3_bucket_versioning" "this" {
  bucket = aws_s3_bucket.this.id
  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_server_side_encryption_configuration" "this" {
  bucket = aws_s3_bucket.this.bucket

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

resource "aws_s3_bucket_public_access_block" "this" {
  bucket = aws_s3_bucket.this.bucket

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}
