resource "azurerm_container_registry" "main" {
  name                          = "cr${var.application_name}${var.environment_name}"
  resource_group_name           = local.resource_group_name
  location                      = local.location
  sku                           = "Premium"
  zone_redundancy_enabled       = false
  admin_enabled                 = true
  data_endpoint_enabled         = false
  public_network_access_enabled = false
  network_rule_bypass_option    = "AzureServices"

  # network_rule_set {
  #   default_action = "Deny"

  #   ip_rule {
  #     action   = "Allow"
  #     ip_range = azurerm_subnet.workload.address_prefixes[0]
  #   }
  # }
}
