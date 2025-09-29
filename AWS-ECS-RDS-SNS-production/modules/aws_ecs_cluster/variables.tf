variable "name" {
  type = string
}

variable "enable_container_insights" {
  type    = bool
  default = true
}

variable "default_capacity_provider" {
  type    = string
  default = "FARGATE"
}
