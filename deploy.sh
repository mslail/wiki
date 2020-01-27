#!/bin/bash

# Getting script paths
MAIN_PATH="../go/src/main"

#Deploying servers
echo "Attempting to deploy wiki servers"
"$MAIN_PATH" & serve -s build
