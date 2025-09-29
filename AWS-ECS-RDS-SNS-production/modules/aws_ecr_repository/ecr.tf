resource "aws_ecr_repository" "this" {
  name                 = var.name
  image_tag_mutability = "IMMUTABLE"

  image_scanning_configuration {
    scan_on_push = true
  }
}

resource "aws_ecr_lifecycle_policy" "this" {
  repository = aws_ecr_repository.this.name

  policy = jsonencode({
    "rules" : [
      {
        "rulePriority" = 1,
        "description"  = "Keep last 750 images",
        "selection" = {
          "tagStatus"   = "any",
          "countType"   = "sinceImagePushed",
          "countUnit"   = "days",
          "countNumber" = 750
        },
        "action" = {
          "type" = "expire"
        }
      }
    ]
  })
}
