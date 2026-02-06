#!/usr/bin/env bash
set -euo pipefail

# Server-side deploy for thegtservices.com
# Assumes:
# - Repo is cloned to /var/www/thegtservices/app
# - Nginx serves /var/www/thegtservices/dist

APP_DIR="/var/www/thegtservices/app"
DIST_DIR="/var/www/thegtservices/dist"

if [[ ! -d "$APP_DIR/.git" ]]; then
  echo "ERROR: Repo not found at $APP_DIR"
  echo "Clone it first: sudo git clone https://github.com/lakshayindia28-rgb/gtservice.git $APP_DIR"
  exit 1
fi

cd "$APP_DIR"

echo "== Pull latest =="
git pull

echo "== Install deps =="
npm ci

echo "== Build =="
npm run build

echo "== Publish dist -> $DIST_DIR =="
sudo mkdir -p "$DIST_DIR"
# Copy only build output, not source/node_modules
sudo rsync -az --delete dist/ "$DIST_DIR/"

echo "== Verify =="
test -f "$DIST_DIR/index.html"

echo "Deployed OK: $DIST_DIR/index.html"
