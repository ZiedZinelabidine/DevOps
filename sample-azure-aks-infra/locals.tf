locals {
  resource_group_name = "aks_tf_rg"
  location            = "francecentral"
  cluster_name        = "my-aks-cluster"
  kubernetes_version  = "1.33.0"
  system_node_count   = 2
  acr_name            = "testterrafstg"
  primary_region      = "francecentral"
  address_space       = "10.0.0.0/22"
  # vpn_address_space = "172.16.201.0/24"
  # vpn_application_id = "2d4e6e16-f5df-45bf-91b0-c702247ce115"
  admin_groups = ["efdd020b-39fd-41d7-ba91-e6266b444501"]

  aks_configuration = {
    system_pool = {
      sku      = "Standard_D4s_v3"
      capacity = 3
    }
    workload_pool = {
      sku = "Standard_D4s_v3"
      capacity = {
        ready = 3
        min   = 3
        max   = 6
      }
    }
  }

}
