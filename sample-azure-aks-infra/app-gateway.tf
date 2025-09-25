
# resource "azurerm_public_ip" "app_gateway" {
#   name                = "pip-agw-${var.application_name}-${var.environment_name}"
#   location            = local.location
#   resource_group_name = local.resource_group_name

#   sku                     = "Standard"
#   zones                   = [1, 2, 3]
#   allocation_method       = "Static"
#   idle_timeout_in_minutes = 4

# }

# locals {
#   #backend_ip_address = cidrhost(azurerm_subnet.workload.address_prefixes[0], 250)

#   backend_address_pool_name      = "myBackendPool"
#   frontend_ip_configuration_name = "appGwPublicFrontendIp"
#   backend_http_settings_name     = "healthCheckSettings"
#   probe_name                     = "healthCheck"
#   url_path_map_name              = "httpRule"
#   http_listener_name             = "httpListener"
# }

# resource "azurerm_application_gateway" "main" {
#   name                = "agw-${var.application_name}-${var.environment_name}"
#   resource_group_name = local.resource_group_name
#   location            = local.location

#   sku {
#     name = var.app_gateway_configuration.sku
#     tier = var.app_gateway_configuration.sku
#   }
#   zones        = [2]
#   enable_http2 = false

#   autoscale_configuration {
#     min_capacity = var.app_gateway_configuration.capacity.min
#     max_capacity = var.app_gateway_configuration.capacity.max
#   }

#   gateway_ip_configuration {
#     name      = "appGatewayIpConfig"
#     subnet_id = azurerm_subnet.app_gateway.id
#   }

#   frontend_port {
#     name = "port_80"
#     port = 80
#   }

#   frontend_ip_configuration {
#     name                          = local.frontend_ip_configuration_name
#     public_ip_address_id          = azurerm_public_ip.app_gateway.id
#     private_ip_address_allocation = "Dynamic"
#   }

#   backend_address_pool {
#     name = local.backend_address_pool_name
#   }

#   backend_http_settings {
#     name                  = local.backend_http_settings_name
#     port                  = 80
#     protocol              = "Http"
#     cookie_based_affinity = "Disabled"
#     request_timeout       = 20
#     probe_name            = local.probe_name # Associer la sonde de santé

#   }

#   # Ajouter la sonde de santé
#   probe {
#     name                = local.probe_name
#     protocol            = "Http"      # Protocole de la sonde (HTTP ou HTTPS)
#     host                = "127.0.0.1" # Hôte à vérifier (peut être l'adresse IP du backend)
#     path                = "/health"   # Chemin du point de terminaison de santé
#     interval            = 30          # Intervalle de vérification en secondes
#     timeout             = 30          # Temps d'attente pour la réponse en secondes
#     unhealthy_threshold = 3           # Nombre d'échecs avant de marquer comme unhealthy
#   }



#   http_listener {
#     name                           = local.http_listener_name
#     frontend_ip_configuration_name = local.frontend_ip_configuration_name
#     frontend_port_name             = "port_80"
#     protocol                       = "Http"
#     require_sni                    = false
#   }

#   request_routing_rule {
#     name                       = local.url_path_map_name
#     priority                   = 1
#     rule_type                  = "Basic"
#     http_listener_name         = local.http_listener_name
#     backend_address_pool_name  = local.backend_address_pool_name
#     backend_http_settings_name = local.backend_http_settings_name
#   }
# }



