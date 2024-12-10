#!/bin/bash

# Define paths
PROJECT_DIR="/Users/alexiwisteria/Desktop/story-quiz copy"
DATA_FILE="$PROJECT_DIR/data/story.json"
PUBLIC_DIR="$PROJECT_DIR/public"
TARGET_FILE="$PUBLIC_DIR/story.json"

# Check if story.json exists in the data directory
if [ ! -f "$DATA_FILE" ]; then
    echo "Error: story.json not found in $PROJECT_DIR/data"
    exit 1
fi

# Ensure the public directory exists
if [ ! -d "$PUBLIC_DIR" ]; then
    echo "Public directory not found. Creating it..."
    mkdir "$PUBLIC_DIR"
fi

# Move story.json to the public directory
echo "Moving story.json to public directory..."
mv "$DATA_FILE" "$TARGET_FILE"

if [ $? -eq 0 ]; then
    echo "story.json successfully moved to $TARGET_FILE"
else
    echo "Error: Failed to move story.json"
    exit 1
fi

# Confirm setup is complete
echo "Setup complete. You can now reference story.json as '/story.json' in your app."

