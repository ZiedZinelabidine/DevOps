#!/bin/bash
# Add encoded and normalised header
cat header.json | tr -d '\n' | tr -d '\r' | openssl enc -base64 -A | tr +/ -_ | tr -d '=' > client_assertion.txt
echo -n "." >> client_assertion.txt
# Add encoded and normalised payload
cat payload.json | tr -d '\n' | tr -d '\r' | openssl enc -base64 -A | tr +/ -_ | tr -d '=' >> client_assertion.txt
# Generate signature
cat client_assertion.txt | tr -d '\n' | tr -d '\r' | openssl dgst -sha256 -sign privatecert.pem | openssl enc -base64 -A | tr +/ -_ | tr -d '=' > sign.txt
echo -n "." >> client_assertion.txt
# Add signature
cat sign.txt >> client_assertion.txt
