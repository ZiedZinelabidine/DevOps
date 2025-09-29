resource "random_password" "this" {
  length           = 32
  override_special = "!()-_=[}<>"
  special          = true
}
