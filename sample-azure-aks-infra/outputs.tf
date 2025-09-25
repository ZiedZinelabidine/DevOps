output "kubernetes_cluster_name" {
  value = azurerm_kubernetes_cluster.main.name
}

output "container_registry" {
  value = azurerm_kubernetes_cluster.main.kubelet_identity[0].object_id
}

output "ip_k8s" {

  value = azurerm_subnet.workload.address_prefixes[0]

}
# output "workload_managed_identity_id" {
#   value = azurerm_user_assigned_identity.workload.client_id
# }
# output "keyvault_name" {
#   value = azurerm_key_vault.main.name
# }
# output "cosmos_endpoint" {
#   value = azurerm_cosmosdb_account.main.endpoint
# }
# output "user_svc_database" {
#   value = azurerm_cosmosdb_sql_database.user_svc.name
# }
# output "tenant_svc_database" {
#   value = ""
# }
# # output "backend_ip_address" {
# #   value = local.backend_ip_address
# # }
# output "backend_nodepool" {
#   value = azurerm_kubernetes_cluster_node_pool.workload.name
# }
