#!/usr/bin/env bash
set -euo pipefail

# Server-side deploy for thegtservices.com
# Assumes:
# - Repo is cloned to /var/www/thegtservices/app
# - Nginx serves /var/www/thegtservices/dist

APP_DIR="/var/www/thegtservices/app"
DIST_DIR="/var/www/thegtservices/dist"

DEPLOY_BRANCH="${DEPLOY_BRANCH:-}"

BUILD_DIR="$APP_DIR"

if [[ ! -d "$APP_DIR/.git" ]]; then
  echo "ERROR: Repo not found at $APP_DIR"
  echo "Clone it first: sudo git clone https://github.com/lakshayindia28-rgb/gtservice.git $APP_DIR"
  exit 1
fi

cd "$APP_DIR"

echo "== Update repo =="
git fetch --prune origin

if [[ -n "$DEPLOY_BRANCH" ]]; then
  echo "Deploy branch: $DEPLOY_BRANCH"
  if git show-ref --verify --quiet "refs/heads/$DEPLOY_BRANCH"; then
    git checkout "$DEPLOY_BRANCH"
  else
    git checkout -B "$DEPLOY_BRANCH" "origin/$DEPLOY_BRANCH"
  fi
  git reset --hard "origin/$DEPLOY_BRANCH"
else
  # Backward compatible default: update the currently checked out branch
  CURRENT_BRANCH="$(git rev-parse --abbrev-ref HEAD)"
  echo "Deploy branch (current): $CURRENT_BRANCH"
  git pull --ff-only
fi

if [[ -f "$APP_DIR/package.json" ]]; then
  BUILD_DIR="$APP_DIR"
elif [[ -f "$APP_DIR/clarity-sphere-lab/package.json" ]]; then
  BUILD_DIR="$APP_DIR/clarity-sphere-lab"
else
  echo "ERROR: Could not find package.json in $APP_DIR or $APP_DIR/clarity-sphere-lab"
  exit 1
fi

cd "$BUILD_DIR"

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
