# primary_region = "westus3"
application_name = "itgalaxy"
environment_name = "production"
address_space    = "10.0.0.0/22"
# vpn_address_space  = "172.16.201.0/24"
# vpn_application_id = "2d4e6e16-f5df-45bf-91b0-c702247ce115"
admin_groups = ["efdd020b-39fd-41d7-ba91-e6266b444501"]

aks_configuration = {
  system_pool = {
    sku      = "Standard_D2_v4"
    capacity = 1
  }
  workload_pool = {
    sku = "Standard_D2_v4"
    capacity = {
      ready = 3
      min   = 3
      max   = 6
    }
  }
}

app_gateway_configuration = {
  sku = "Standard_v2"
  capacity = {
    ready = 1
    min   = 3
    max   = 125
  }
}

# lock = {
#   kind = "CanNotDelete"          # Verrouillage en mode "ReadOnly" CanNotDelete
#   name = "my-aks-read-only-lock" # Nom personnalisé du verrou
# }

controller_image     = "ingress-nginx/controller"
controller_tag       = "v1.8.0"
patch_image          = "ingress-nginx/kube-webhook-certgen"
patch_tag            = "v20230407"
defaultbackend_image = "defaultbackend-amd64"
defaultbackend_tag   = "1.5"
