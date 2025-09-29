resource "aws_rds_cluster_parameter_group" "this" {
  name   = "${var.name}-cluster"
  family = "aurora-postgresql12"

  lifecycle {
    ignore_changes = [family]
  }
}

resource "aws_rds_cluster" "this" {
  cluster_identifier = "${var.name}-cluster"

  # Networking
  db_subnet_group_name = var.db_subnet_group_name
  vpc_security_group_ids = concat([
    aws_security_group.this.id
  ], var.additional_security_groups)

  # Access
  database_name   = var.database_name
  master_username = var.master_username
  master_password = random_password.this.result

  # Configs
  engine                          = "aurora-postgresql"
  engine_version                  = "12.15"
  db_cluster_parameter_group_name = aws_rds_cluster_parameter_group.this.name

  kms_key_id        = aws_kms_key.this.arn
  storage_encrypted = true

  preferred_maintenance_window = "sun:04:00-sun:05:00" # UTC
  deletion_protection          = true

  # BackUp
  backup_retention_period = 35
  preferred_backup_window = "01:00-03:00" # UTC

  lifecycle {
    prevent_destroy = true
  }
}

resource "aws_rds_cluster_instance" "this" {
  count = var.instance_count

  identifier         = "${var.name}-${count.index + 1}"
  cluster_identifier = aws_rds_cluster.this.id

  instance_class = "db.t3.medium" # @TODO upgrade to non T instance.

  ca_cert_identifier = "rds-ca-rsa4096-g1"

  engine         = aws_rds_cluster.this.engine
  engine_version = aws_rds_cluster.this.engine_version

  lifecycle {
    prevent_destroy = true
  }
}

resource "aws_security_group" "this" {
  name   = "${var.name}-cluster-rds"
  vpc_id = var.vpc_id
}
