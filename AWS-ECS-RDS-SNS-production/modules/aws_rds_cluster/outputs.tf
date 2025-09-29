output "aws_rds_cluster_instance" {
  value = aws_rds_cluster_instance.this[0].identifier
}

output "endpoint" {
  value = aws_rds_cluster.this.endpoint
}

output "port" {
  value = aws_rds_cluster.this.port
}

output "security_group_id" {
  value = aws_security_group.this.id
}
