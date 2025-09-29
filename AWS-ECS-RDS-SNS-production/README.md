# Infrastructure

This repository is in charge of managing Cloud resources (i.e. AWS Accounts) with
Terraform to implement Infrastructure as Code.

* Modules directory is containing generic and reusable module.
* Components directory is containing parts reused across environments.
* Workspaces directory includes all terraform workspaces (i.e. Production and Test).

## Workspaces

### AWS Organization

This workspaces is in charge of AWS Organization as well as shared resources.

* IAM Users
* CloudTrail
* Global Budgets
* Terraform resources (AWS S3, DynamoDB)

### Production

This workspace is in charge of the Production platform

* [Marketing Pages](https://www.saveursetvie.fr)
* [Frontend](https://www.saveursetvie.fr/commande-en-ligne)
* [API](https://api.saveursetvie.fr/api)
* [Strapi](https://content.saveursetvie.fr/admin)
* [Admin](https://admin.saveursetvie.fr/login)

### Test

This workspace is a copy of Production platform for testing purpose. On the
opposite of Production, this workspace use Route53 to manage DNS.

* [Marketing Pages](https://www.test.saveursetvie.fr)
* [Frontend](https://www.test.saveursetvie.fr/commande-en-ligne)
* [API](https://api.test.saveursetvie.fr/api)
* [Strapi](https://content.test.saveursetvie.fr/admin)
* [Admin](https://admin.test.saveursetvie.fr/login)
