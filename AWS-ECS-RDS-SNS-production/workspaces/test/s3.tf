resource "aws_s3_bucket" "ecs_task_definitions" {
  bucket = "${local.name}-${local.environment}-ecs-task-definitions"

  lifecycle {
    prevent_destroy = true
  }
}

resource "aws_s3_bucket_server_side_encryption_configuration" "ecs_task_definitions" {
  bucket = aws_s3_bucket.ecs_task_definitions.bucket

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

resource "aws_s3_bucket_public_access_block" "ecs_task_definitions" {
  bucket = aws_s3_bucket.ecs_task_definitions.bucket

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}
