resource "aws_cloudwatch_dashboard" "overview" {
  dashboard_name = "Overview"

  dashboard_body = jsonencode(
    {
      "widgets" : [
        {
          "type" : "metric",
          "x" : 0,
          "y" : 0,
          "width" : 12,
          "height" : 6,
          "properties" : {
            "metrics" : [
              ["AWS/ECS", "CPUUtilization", "ServiceName", "marketing-pages", "ClusterName", var.aws_ecs_cluster, { "id" : "m3", "color" : local.color["marketing_pages"] }],
              ["...", "strapi", ".", ".", { "id" : "m4", "color" : local.color["strapi"] }],
              ["...", "frontend", ".", ".", { "id" : "m5", "color" : local.color["frontend"] }],
              ["...", "api", ".", ".", { "id" : "m6", "color" : local.color["api"] }],
              ["...", "admin", ".", ".", { "color" : local.color["admin"] }]
            ],
            "region" : data.aws_region.current.name,
            "title" : "CPU Utilization",
            "legend" : {
              "position" : "bottom"
            },
            "timezone" : "Local",
            "liveData" : false,
            "period" : 60,
            "yAxis" : {
              "left" : {
                "min" : 0,
                "showUnits" : false,
                "label" : "Percent"
              }
            },
            "view" : "timeSeries",
            "stacked" : false,
            "stat" : "Average"
          }
        },
        {
          "type" : "metric",
          "x" : 12,
          "y" : 0,
          "width" : 12,
          "height" : 6,
          "properties" : {
            "metrics" : [
              ["AWS/ECS", "MemoryUtilization", "ServiceName", "frontend", "ClusterName", var.aws_ecs_cluster, { "id" : "m3", "color" : local.color["frontend"] }],
              ["...", "api", ".", ".", { "id" : "m4", "color" : local.color["api"] }],
              ["...", "strapi", ".", ".", { "id" : "m5", "color" : local.color["strapi"] }],
              ["...", "marketing-pages", ".", ".", { "id" : "m6", "color" : local.color["marketing_pages"] }],
              ["...", "admin", ".", ".", { "color" : local.color["admin"] }]
            ],
            "region" : data.aws_region.current.name,
            "title" : "Memory Utilization",
            "legend" : {
              "position" : "bottom"
            },
            "timezone" : "Local",
            "liveData" : false,
            "period" : 60,
            "yAxis" : {
              "left" : {
                "min" : 0,
                "showUnits" : false,
                "label" : "Percent"
              }
            },
            "view" : "timeSeries",
            "stacked" : false,
            "stat" : "Average"
          }
        },
        {
          "type" : "metric",
          "x" : 0,
          "y" : 12,
          "width" : 12,
          "height" : 6,
          "properties" : {
            "metrics" : [
              ["AWS/SES", "Delivery"],
              [".", "Send"],
              [".", "Bounce"]
            ],
            "region" : data.aws_region.current.name,
            "title" : "AWS SES",
            "legend" : {
              "position" : "bottom"
            },
            "timezone" : "Local",
            "liveData" : false,
            "period" : 1,
            "view" : "timeSeries",
            "stacked" : false,
            "stat" : "Sum",
            "setPeriodToTimeRange" : true
          }
        },
        {
          "type" : "metric",
          "x" : 0,
          "y" : 6,
          "width" : 12,
          "height" : 6,
          "properties" : {
            "metrics" : [
              [{ "expression" : "m3 * m8", "label" : "strapi", "id" : "e1", "color" : local.color["strapi"], "region" : data.aws_region.current.name }],
              [{ "expression" : "m1 * m10", "label" : "frontend", "id" : "e2", "color" : local.color["frontend"], "region" : data.aws_region.current.name }],
              [{ "expression" : "m2 * m7", "label" : "marketing-pages", "id" : "e3", "color" : local.color["marketing_pages"], "region" : data.aws_region.current.name }],
              [{ "expression" : "m4 * m9", "label" : "api", "id" : "e4", "color" : local.color["api"], "region" : data.aws_region.current.name }],
              [{ "expression" : "m5 * m11", "label" : "admin", "id" : "e5", "color" : local.color["admin"], "region" : data.aws_region.current.name }],
              ["AWS/ApplicationELB", "RequestCountPerTarget", "TargetGroup", var.target_groups.frontend, { "label" : "frontend", "color" : local.color["frontend"], "id" : "m1", "visible" : false }],
              ["...", var.target_groups.marketing_pages, { "label" : "marketing-pages", "color" : local.color["marketing_pages"], "id" : "m2", "visible" : false }],
              ["...", var.target_groups.strapi, { "label" : "strapi", "color" : local.color["strapi"], "id" : "m3", "visible" : false }],
              ["...", var.target_groups.api, { "label" : "api", "color" : local.color["api"], "id" : "m4", "visible" : false }],
              ["...", var.target_groups.admin, { "label" : "admin", "color" : local.color["admin"], "id" : "m5", "visible" : false }],
              ["AWS/CloudFront", "Requests", "Region", "Global", "DistributionId", var.aws_cloudfront_distribution_id, { "region" : "us-east-1", "color" : "#2ca02c", "label" : "CloudFront", "id" : "m6" }],
              ["ECS/ContainerInsights", "RunningTaskCount", "ServiceName", "marketing-pages", "ClusterName", var.aws_ecs_cluster, { "id" : "m7", "visible" : false, "color" : local.color["marketing_pages"] }],
              ["...", "strapi", ".", ".", { "id" : "m8", "visible" : false, "color" : local.color["strapi"] }],
              ["...", "api", ".", ".", { "id" : "m9", "visible" : false, "color" : local.color["api"] }],
              ["...", "frontend", ".", ".", { "id" : "m10", "visible" : false, "color" : local.color["frontend"] }],
              ["...", "admin", ".", ".", { "id" : "m11", "visible" : false, "color" : local.color["admin"] }]
            ],
            "view" : "timeSeries",
            "stacked" : false,
            "region" : data.aws_region.current.name,
            "stat" : "Sum",
            "period" : 60,
            "title" : "ALB: RequestCount"
          }
        },
        {
          "type" : "metric",
          "x" : 0,
          "y" : 18,
          "width" : 12,
          "height" : 6,
          "properties" : {
            "view" : "timeSeries",
            "stacked" : false,
            "metrics" : [
              ["AWS/RDS", "CPUUtilization", "DBInstanceIdentifier", var.aws_rds_cluster_instance],
              [".", "DatabaseConnections", ".", "."],
              [".", "SwapUsage", ".", "."]
            ],
            "region" : data.aws_region.current.name,
            "title" : "RDS: CPUUtilization / Connections / Swap",
            "period" : 300
          }
        },
        {
          "type" : "metric",
          "x" : 12,
          "y" : 18,
          "width" : 12,
          "height" : 6,
          "properties" : {
            "view" : "timeSeries",
            "stacked" : false,
            "metrics" : [
              ["AWS/RDS", "ReadIOPS", "DBInstanceIdentifier", var.aws_rds_cluster_instance],
              [".", "WriteIOPS", ".", "."],
              [".", "ReadLatency", ".", "."],
              [".", "WriteLatency", ".", "."]
            ],
            "region" : data.aws_region.current.name,
            "title" : "RDS: IPOS",
            "period" : 300
          }
        },
        {
          "type" : "metric",
          "x" : 12,
          "y" : 12,
          "width" : 12,
          "height" : 6,
          "properties" : {
            "metrics" : [
              ["AWS/Cognito", "SignInSuccesses", "UserPool", var.cognito.user_user_pool_id, "UserPoolClient", var.cognito.user_user_pool_client_id, { "label" : "SignInSuccesses (User)" }],
              [".", "SignUpSuccesses", ".", ".", ".", ".", { "label" : "SignUpSuccesses (User)" }],
              [".", "SignInSuccesses", ".", var.cognito.admin_user_pool_id, ".", var.cognito.admin_user_pool_client_id, { "label" : "SignInSuccesses (Admin)" }]
            ],
            "view" : "timeSeries",
            "stacked" : false,
            "region" : data.aws_region.current.name,
            "title" : "Cognito",
            "period" : 60,
            "stat" : "Sum",
            "setPeriodToTimeRange" : true,
            "legend" : {
              "position" : "bottom"
            },
            "liveData" : false
          }
        },
        {
          "type" : "metric",
          "x" : 12,
          "y" : 6,
          "width" : 12,
          "height" : 6,
          "properties" : {
            "metrics" : [
              ["AWS/ApplicationELB", "HTTPCode_ELB_5XX_Count", "LoadBalancer", var.aws_lb, { "color" : "#d62728", "stat" : "Sum" }],
              [".", "TargetResponseTime", "TargetGroup", var.target_groups.api, "LoadBalancer", var.aws_lb, { "label" : "api", "color" : local.color["api"] }],
              ["...", var.target_groups.strapi, ".", ".", { "label" : "strapi", "color" : local.color["strapi"] }],
              ["...", var.target_groups.marketing_pages, ".", ".", { "label" : "marketing-pages", "color" : local.color["marketing_pages"] }],
              ["...", var.target_groups.frontend, ".", ".", { "label" : "frontend", "color" : local.color["frontend"] }],
              ["...", var.target_groups.admin, ".", ".", { "label" : "admin", "color" : local.color["admin"] }]
            ],
            "view" : "timeSeries",
            "stacked" : false,
            "region" : data.aws_region.current.name,
            "title" : "ALB: 5XX and ResponseTime",
            "period" : 60,
            "stat" : "Average",
            "setPeriodToTimeRange" : true,
            "annotations" : {
              "horizontal" : [
                {
                  "color" : "#ff7f0e",
                  "label" : "1 sec latency",
                  "value" : 1
                },
                {
                  "color" : "#d62728",
                  "label" : "2 sec latency",
                  "value" : 2
                }
              ]
            }
          }
        }
      ]
  })
}
