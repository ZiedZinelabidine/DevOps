# resource "azurerm_key_vault" "main" {
#   name                          = "kv-${var.application_name}-${var.environment_name}"
#   location                      = local.location
#   resource_group_name           = local.resource_group_name
#   tenant_id                     = data.azurerm_client_config.current.tenant_id
#   sku_name                      = "standard"
#   public_network_access_enabled = true
#   purge_protection_enabled      = false

#   access_policy {
#     tenant_id = data.azurerm_client_config.current.tenant_id
#     object_id = azurerm_user_assigned_identity.pod_identity.principal_id

#     secret_permissions = [
#       "Get",
#       "List",
#     ]
#   }

# }

# resource "azurerm_key_vault_secret" "db_pwd" {
#   name         = "dbPwd"
#   value        = "Password123!"
#   key_vault_id = azurerm_key_vault.main.id
# }

# resource "azurerm_role_assignment" "terraform_keyvault_access" {
#   scope                = azurerm_key_vault.main.id
#   role_definition_name = "Key Vault Administrator" # Rôle plus élevé
#   principal_id         = data.azurerm_client_config.current.object_id
# }

# resource "azurerm_role_assignment" "terraform_keyvault_access_pod" {
#   scope                = azurerm_key_vault.main.id
#   role_definition_name = "Key Vault Secrets User" # Rôle "Reader" pour un accès en lecture seule
#   principal_id         = azurerm_user_assigned_identity.pod_identity.principal_id
# }

# resource "azurerm_role_assignment" "terraform_keyvault_access_2" {
#   scope                = azurerm_key_vault.main.id
#   role_definition_name = "Owner" # Rôle plus élevé
#   principal_id         = data.azurerm_client_config.current.object_id
# }

# resource "azurerm_role_assignment" "terraform_keyvault_access_zz" {
#   scope                = azurerm_key_vault.main.id
#   role_definition_name = "Owner" # Rôle plus élevé
#   principal_id         = "28a1ca3a-80fb-4e24-bbf9-a5023b3633cd"
# }


# resource "azurerm_role_assignment" "workload_identity_keyvault" {
#   scope                = azurerm_key_vault.main.id
#   role_definition_name = "Key Vault Secrets User"
#   principal_id         = azurerm_user_assigned_identity.workload.principal_id
# }

# # module "keyvault_monitor_diagnostic" {
# #   source  = "markti/azure-terraformer/azurerm//modules/monitor/diagnostic-setting/rando"
# #   version = "1.0.10"

# #   resource_id                = azurerm_key_vault.main.id
# #   log_analytics_workspace_id = azurerm_log_analytics_workspace.main.id
# #   logs                       = ["AuditEvent", "AzurePolicyEvaluationDetails"]

# # }
