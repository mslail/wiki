#!/bin/bash

# Grabbing Hostname
HOST=$(hostname -i)
BACKEND_PORT="9090"
# Writing to file
q='s$http://localhost:9090/$http://'"$HOST:$BACKEND_PORT"'/$g'
sed -ie "$q" src/server.js

