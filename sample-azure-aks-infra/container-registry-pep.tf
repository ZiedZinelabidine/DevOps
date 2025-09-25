
resource "azurerm_private_dns_zone" "acr" {
  name                = "privatelink.azurecr.io"
  resource_group_name = local.resource_group_name
}

resource "azurerm_private_dns_zone_virtual_network_link" "acr_workload" {
  name                  = "dns-link-acr-workload"
  resource_group_name   = local.resource_group_name
  private_dns_zone_name = azurerm_private_dns_zone.acr.name
  virtual_network_id    = azurerm_virtual_network.main.id
}

resource "azurerm_private_endpoint" "acr" {
  name                = "pep-${azurerm_container_registry.main.name}"
  resource_group_name = local.resource_group_name
  location            = local.location
  subnet_id           = azurerm_subnet.workload.id

  private_service_connection {
    name                           = "${azurerm_container_registry.main.name}-link"
    private_connection_resource_id = azurerm_container_registry.main.id
    subresource_names              = ["registry"]
    is_manual_connection           = false
  }
  private_dns_zone_group {
    name                 = "acr-dns"
    private_dns_zone_ids = [azurerm_private_dns_zone.acr.id]
  }
}


# module "acr_pep_monitor_diagnostic" {
#   source  = "markti/azure-terraformer/azurerm//modules/monitor/diagnostic-setting/rando"
#   version = "1.0.10"

#   resource_id                = azurerm_private_endpoint.acr.network_interface.0.id
#   log_analytics_workspace_id = azurerm_log_analytics_workspace.main.id

# }
