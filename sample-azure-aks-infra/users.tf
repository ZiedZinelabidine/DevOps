resource "azuread_group" "aks_developers" {
  display_name     = "aks-developers"
  security_enabled = true
}

resource "azuread_group" "aks_admins" {
  display_name     = "aks-admins"
  security_enabled = true
}

resource "azuread_group" "aks_qa" {
  display_name     = "aks-qa"
  security_enabled = true
}

resource "azuread_group" "aks_testers" {
  display_name     = "aks-testers"
  security_enabled = true
}

resource "kubernetes_cluster_role_binding" "aks_developers_edit" {
  metadata {
    name = "aks-developers-edit"
  }
  role_ref {
    api_group = "rbac.authorization.k8s.io"
    kind      = "ClusterRole"
    name      = "edit"
  }
  subject {
    kind      = "Group"
    name      = azuread_group.aks_developers.object_id
    api_group = "rbac.authorization.k8s.io"
  }
}

resource "kubernetes_cluster_role_binding" "aks_admins_admin" {
  metadata {
    name = "aks-admins-admin"
  }
  role_ref {
    api_group = "rbac.authorization.k8s.io"
    kind      = "ClusterRole"
    name      = "admin"
  }
  subject {
    kind      = "Group"
    name      = azuread_group.aks_admins.object_id
    api_group = "rbac.authorization.k8s.io"
  }
}

resource "kubernetes_cluster_role_binding" "aks_qa_view" {
  metadata {
    name = "aks-qa-view"
  }
  role_ref {
    api_group = "rbac.authorization.k8s.io"
    kind      = "ClusterRole"
    name      = "view"
  }
  subject {
    kind      = "Group"
    name      = azuread_group.aks_qa.object_id
    api_group = "rbac.authorization.k8s.io"
  }
}

resource "kubernetes_cluster_role_binding" "aks_testers_edit" {
  metadata {
    name = "aks-testers-edit"
  }
  role_ref {
    api_group = "rbac.authorization.k8s.io"
    kind      = "ClusterRole"
    name      = "edit"
  }
  subject {
    kind      = "Group"
    name      = azuread_group.aks_testers.object_id
    api_group = "rbac.authorization.k8s.io"
  }
}
