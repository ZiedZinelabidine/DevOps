output "target_group" {
  value = aws_lb_target_group.this
}

output "aws_s3_bucket" {
  value = aws_s3_bucket.this
}

output "docker_image" {
  value = "${module.aws_ecr_repository.repository_url}:latest"
}
