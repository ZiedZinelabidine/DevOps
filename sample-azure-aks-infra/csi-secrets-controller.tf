resource "helm_release" "csi_secrets_store" {
  name       = "csi-secrets-store"
  repository = "https://azure.github.io/secrets-store-csi-driver-provider-azure/charts"
  chart      = "csi-secrets-store-provider-azure"
  namespace  = "kube-system"

  set = [{
    name  = "secrets-store-csi-driver.enableSecretRotation"
    value = "true"
    }, {
    name  = "secrets-store-csi-driver.rotationPollInterval"
    value = "5m"
  }]

}

# Créer une identité managée pour le pod
resource "azurerm_user_assigned_identity" "pod_identity" {
  name                = "pod-identity"
  resource_group_name = local.resource_group_name
  location            = local.location
}

# Créer une Federated Identity Credential
resource "azurerm_federated_identity_credential" "federated_identity" {
  name                = "federated-identity"
  resource_group_name = local.resource_group_name
  audience            = ["api://AzureADTokenExchange"]
  issuer              = azurerm_kubernetes_cluster.main.oidc_issuer_url
  subject             = "system:serviceaccount:default:workload-identity-sa"
  parent_id           = azurerm_user_assigned_identity.pod_identity.id
}
