data "azurerm_client_config" "current" {}

variable "application_name" {
  type = string
}
variable "environment_name" {
  type = string
}
# variable "primary_region" {
#   type = string
# }
variable "address_space" {
  type = string
}
# variable "vpn_address_space" {
#   type = string
# }
# variable "vpn_application_id" {
#   type = string
# }
variable "admin_groups" {
  type = list(string)
}
variable "aks_configuration" {
  type = object({
    system_pool = object({
      sku      = string
      capacity = number
    })
    workload_pool = object({
      sku = string
      capacity = object({
        ready = number
        min   = number
        max   = number
      })
    })
  })
}
variable "app_gateway_configuration" {
  type = object({
    sku = string
    capacity = object({
      ready = number
      min   = number
      max   = number
    })
  })
}

variable "lock" {
  type = object({
    kind = string
    name = optional(string, null)
  })
  default     = null
  description = <<DESCRIPTION
  Controls the Resource Lock configuration for this resource. The following properties can be specified:

  - `kind` - (Required) The type of lock. Possible values are `\"CanNotDelete\"` and `\"ReadOnly\"`.
  - `name` - (Optional) The name of the lock. If not specified, a name will be generated based on the `kind` value. Changing this forces the creation of a new resource.
  DESCRIPTION

  validation {
    condition     = var.lock != null ? contains(["CanNotDelete", "ReadOnly"], var.lock.kind) : true
    error_message = "Lock kind must be either `\"CanNotDelete\"` or `\"ReadOnly\"`."
  }
}

variable "controller_image" {
  description = "Nom de l'image du contrôleur NGINX"
  type        = string
}

variable "controller_tag" {
  description = "Tag de l'image du contrôleur NGINX"
  type        = string
}

variable "patch_image" {
  description = "Nom de l'image pour les admission webhooks"
  type        = string
}

variable "patch_tag" {
  description = "Tag de l'image pour les admission webhooks"
  type        = string
}

variable "defaultbackend_image" {
  description = "Nom de l'image du backend par défaut"
  type        = string
}

variable "defaultbackend_tag" {
  description = "Tag de l'image du backend par défaut"
  type        = string
}
