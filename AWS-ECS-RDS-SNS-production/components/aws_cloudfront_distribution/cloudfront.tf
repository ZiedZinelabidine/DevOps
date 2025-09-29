resource "random_uuid" "cloudfront_token" {}

resource "aws_cloudfront_origin_access_identity" "this" {}

resource "aws_cloudfront_distribution" "this" {
  enabled         = true
  is_ipv6_enabled = true

  aliases = var.aliases

  origin {
    origin_id   = var.default_origin.origin_id
    domain_name = var.default_origin.domain_name

    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "https-only"
      origin_ssl_protocols   = ["TLSv1.2"]
    }

    custom_header {
      name  = "Custom-X-Token"
      value = random_uuid.cloudfront_token.result
    }
  }

  origin {
    origin_id   = var.images_s3_origin.origin_id
    domain_name = var.images_s3_origin.domain_name

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.this.cloudfront_access_identity_path
    }
  }

  origin {
    origin_id   = var.strapi_s3_origin.origin_id
    domain_name = var.strapi_s3_origin.domain_name

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.this.cloudfront_access_identity_path
    }
  }

  default_cache_behavior {
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = var.default_origin.origin_id

    forwarded_values {
      query_string = true
      headers      = ["Host"]

      cookies {
        forward = "all"
      }
    }

    min_ttl                = 60    # 1 min
    default_ttl            = 300   # 5 min
    max_ttl                = 86400 # 1 day
    compress               = true
    viewer_protocol_policy = "redirect-to-https"
  }

  ordered_cache_behavior {
    path_pattern     = "/commande-en-ligne*"
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = var.default_origin.origin_id

    forwarded_values {
      query_string = true
      headers      = ["Host"]

      cookies {
        forward = "all"
      }
    }

    min_ttl                = 0
    default_ttl            = 300   # 5 min
    max_ttl                = 86400 # 1 day
    compress               = true
    viewer_protocol_policy = "redirect-to-https"
  }

  ordered_cache_behavior {
    path_pattern     = "/zzz-images/*"
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD", "OPTIONS"]
    target_origin_id = var.images_s3_origin.origin_id

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    min_ttl                = 0
    default_ttl            = 2592000  # 30 days
    max_ttl                = 31536000 # 365 days
    compress               = true
    viewer_protocol_policy = "redirect-to-https"
  }

  ordered_cache_behavior {
    path_pattern     = "/zzz-media/*"
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD", "OPTIONS"]
    target_origin_id = var.strapi_s3_origin.origin_id

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    min_ttl                = 0
    default_ttl            = 2592000  # 30 days
    max_ttl                = 31536000 # 365 days
    compress               = true
    viewer_protocol_policy = "redirect-to-https"
  }

  # ordered_cache_behavior {
  # path_pattern     = "/errors/*"
  # allowed_methods  = ["GET", "HEAD", "OPTIONS"]
  # cached_methods   = ["GET", "HEAD", "OPTIONS"]
  # target_origin_id = aws_s3_bucket.images.bucket

  # forwarded_values {
  # query_string = false

  # cookies {
  # forward = "none"
  # }
  # }

  # min_ttl                = 0
  # default_ttl            = 3600
  # max_ttl                = 86400
  # compress               = true
  # viewer_protocol_policy = "redirect-to-https"
  # }

  # custom_error_response {
  # error_code         = "503"
  # response_code      = "503"
  # response_page_path = "/errors/503.html"
  # }

  price_class = "PriceClass_100"

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  logging_config {
    include_cookies = false
    bucket          = aws_s3_bucket.logs.bucket_domain_name
  }

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate.this.arn
    minimum_protocol_version = "TLSv1.2_2019"
    ssl_support_method       = "sni-only"
  }
}
