resource "kubernetes_namespace" "ingress_basic" {
  metadata {
    name = "ingress-basic"
  }
}

resource "kubernetes_role" "ingress_nginx_leader_election" {
  metadata {
    name      = "ingress-nginx-leader-election"
    namespace = kubernetes_namespace.ingress_basic.metadata[0].name
  }

  rule {
    api_groups = ["coordination.k8s.io"]
    resources  = ["leases"]
    verbs      = ["get", "list", "watch", "create", "update", "patch", "delete"]
  }
}

resource "kubernetes_role_binding" "ingress_nginx_leader_election" {
  metadata {
    name      = "ingress-nginx-leader-election"
    namespace = kubernetes_namespace.ingress_basic.metadata[0].name
  }

  role_ref {
    api_group = "rbac.authorization.k8s.io"
    kind      = "Role"
    name      = kubernetes_role.ingress_nginx_leader_election.metadata[0].name
  }

  subject {
    kind      = "ServiceAccount"
    name      = "ingress-nginx" # Nom du ServiceAccount utilisé par NGINX Ingress Controller
    namespace = kubernetes_namespace.ingress_basic.metadata[0].name
  }
}


resource "kubernetes_cluster_role" "ingress_nginx_endpointslice" {
  metadata {
    name = "ingress-nginx-endpointslice"
  }

  rule {
    api_groups = ["discovery.k8s.io"]
    resources  = ["endpointslices"]
    verbs      = ["get", "list", "watch"]
  }
}

resource "kubernetes_cluster_role_binding" "ingress_nginx_endpointslice" {
  metadata {
    name = "ingress-nginx-endpointslice"
  }

  role_ref {
    api_group = "rbac.authorization.k8s.io"
    kind      = "ClusterRole"
    name      = kubernetes_cluster_role.ingress_nginx_endpointslice.metadata[0].name
  }

  subject {
    kind      = "ServiceAccount"
    name      = "ingress-nginx" # Nom du ServiceAccount utilisé par NGINX Ingress Controller
    namespace = kubernetes_namespace.ingress_basic.metadata[0].name
  }
}


resource "helm_release" "ingress_nginx" {
  name       = "ingress-nginx"
  repository = "https://kubernetes.github.io/ingress-nginx"
  chart      = "ingress-nginx"
  version    = "4.0.13"
  namespace  = kubernetes_namespace.ingress_basic.metadata[0].name

  set = [{
    name  = "controller.replicaCount"
    value = "2"
    }

    # , {
    #   name  = "controller.nodeSelector.kubernetes\\.io/os"
    #   value = "linux"
    # }

    , {
      name  = "controller.image.registry"
      value = "critgalaxyproduction.azurecr.io" # Utiliser l'URL privée de l'ACR
    }

    , {
      name  = "controller.image.image"
      value = var.controller_image
    }

    , {
      name  = "controller.image.tag"
      value = var.controller_tag
    }

    , {
      name  = "controller.image.digest"
      value = ""
    }

    , {
      name  = "controller.service.annotations.service\\.beta\\.kubernetes\\.io/azure-load-balancer-health-probe-request-path"
      value = "/healthz"
    }

    , {
      name  = "controller.admissionWebhooks.patch.image.registry"
      value = "critgalaxyproduction.azurecr.io" # Utiliser l'URL privée de l'ACR
      #value = "${azurerm_container_registry.main.name}.privatelink.azurecr.io"

    }

    , {
      name  = "controller.admissionWebhooks.patch.image.image"
      value = var.patch_image
    }

    , {
      name  = "controller.admissionWebhooks.patch.image.tag"
      value = var.patch_tag
    }

    , {
      name  = "controller.admissionWebhooks.patch.image.digest"
      value = "sha256:edf7dae46debcec54f0c33bfb3005f7a0e992800fdbfb5d0c644ae6cb37db7e9"
    }

    , {
      name  = "defaultBackend.image.registry"
      value = "critgalaxyproduction.azurecr.io" # Utiliser l'URL privée de l'ACR
      # value = "${azurerm_container_registry.main.name}.privatelink.azurecr.io"

    }

    , {
      name  = "defaultBackend.image.image"
      value = var.defaultbackend_image
    }

    , {
      name  = "defaultBackend.image.tag"
      value = var.defaultbackend_tag
    }

    , {
      name  = "defaultBackend.image.digest"
      value = ""
    }
  ]
}






# # resource "azurerm_user_assigned_identity" "agic_identity" {
# #   resource_group_name = local.resource_group_name
# #   location            = local.location
# #   name                = "agic-identity"
# # }

# # resource "azurerm_role_assignment" "agic_role" {
# #   scope                = azurerm_application_gateway.main.id
# #   role_definition_name = "Contributor"
# #   principal_id         = azurerm_user_assigned_identity.agic_identity.principal_id
# # }


# # resource "azurerm_user_assigned_identity" "keyvault_identity" {
# #   resource_group_name = local.resource_group_name
# #   location            = local.location
# #   name                = "keyvault-identity"
# # }


# # resource "azurerm_role_assignment" "keyvault_role" {
# #   scope                = azurerm_key_vault.main.id
# #   role_definition_name = "Key Vault Secrets User"
# #   principal_id         = azurerm_user_assigned_identity.keyvault_identity.principal_id
# # }

# # resource "kubernetes_service_account" "agic_sa" {
# #   metadata {
# #     name      = "agic-sa"
# #     namespace = "default"
# #     annotations = {
# #       "azure.workload.identity/client-id" = azurerm_user_assigned_identity.agic_identity.client_id
# #     }
# #   }
# # }

# # resource "kubernetes_service_account" "keyvault_sa" {
# #   metadata {
# #     name      = "keyvault-sa"
# #     namespace = "default"
# #     annotations = {
# #       "azure.workload.identity/client-id" = azurerm_user_assigned_identity.keyvault_identity.client_id
# #     }
# #   }
# # }



# # resource "helm_release" "agic" {
# #   name       = "ingress-azure"
# #   repository = "https://appgwingress.blob.core.windows.net/ingress-azure-helm-package/"
# #   chart      = "ingress-azure"
# #   namespace  = "azure-application-gateway"

# #   , = [
# #     {
# #       name  = "appgw.name"
# #       value = azurerm_application_gateway.main.name
# #     },

# #     {
# #       name  = "appgw.resourceGroup"
# #       value = local.resource_group_name
# #     },

# #     {
# #       name  = "appgw.subscriptionId"
# #       value = data.azurerm_client_config.current.subscription_id
# #     },

# #     {
# #       name  = "armAuth.type"
# #       value = "workloadIdentity"
# #     },

# #     {
# #       name  = "armAuth.identityClientID"
# #       value = azurerm_user_assigned_identity.agic_identity.client_id
# #     }
# #   ]
# # }

# # resource "helm_release" "keyvault_controller" {
# #   name       = "keyvault-controller"
# #   repository = "https://charts.bitnami.com/bitnami"
# #   chart      = "keyvault-controller"
# #   namespace  = "default"

# #   , = [
# #     {
# #       name  = "azure.keyvault.tenantId"
# #       value = data.azurerm_client_config.current.tenant_id
# #     },
/*  */
# #     {
# #       name  = "azure.keyvault.clientId"
# #       value = azurerm_user_assigned_identity.keyvault_identity.client_id
# #     },

# #     {
# #       name  = "azure.keyvault.vaultName"
# #       value = azurerm_key_vault.main.name
# #     }
# #   ]
# # }
