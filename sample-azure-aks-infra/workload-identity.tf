
resource "azurerm_user_assigned_identity" "workload" {
  location            = local.location
  resource_group_name = local.resource_group_name
  name                = "mi-workload-${var.application_name}-${var.environment_name}"
}
# resource "azurerm_federated_identity_credential" "workload" {
#   name                = azurerm_user_assigned_identity.workload.name
#   resource_group_name = local.resource_group_name.main.name
#   audience            = ["api://AzureADTokenExchange"]
#   issuer              = azurerm_kubernetes_cluster.main.oidc_issuer_url
#   parent_id           = azurerm_user_assigned_identity.workload.id
#   subject             = "system:serviceaccount:${var.k8s_namespace}:${var.k8s_service_account_name}"
# }
