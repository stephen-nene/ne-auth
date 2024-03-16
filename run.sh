#!/bin/bash

# fuser -k 1420/tcp
# Start the Rails server
cd rails-end
rails s &

# Wait for the Rails server to start (adjust this sleep duration based on your app's startup time)
sleep 5

# kill $(lsof -t -i:1420)

# Start the Tauri app
cd ../client
npm run dev -- --host

# If you want to stop the Rails server when the Tauri app exits, you can uncomment the line below
pkill -f "rails s"


# if -d run tauri if -w run dev 