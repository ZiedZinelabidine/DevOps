#!/bin/bash

docker-compose -f docker-compose-local.yml stop

docker-compose -f docker-compose-local.yml down

docker-compose -f docker-compose-local.yml up --build -d

docker-compose -f docker-compose-local.yml logs -f api-itgalaxy
