# Deployment (Vultr Ubuntu 22.04 + Nginx)

This project is a Vite + React SPA. Deployment approach here: build on the Vultr server (`npm ci` + `npm run build`) and serve the generated `dist/` with Nginx.

Target domain: `https://thegtservices.com/`
Repo: `https://github.com/lakshayindia28-rgb/gtservice.git`

## 1) Server prerequisites

On your Vultr Ubuntu 22.04 server:

```bash
sudo apt update
sudo apt install -y nginx git curl
```

### Install Node.js (LTS)

Using NodeSource (simple + stable):

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
node -v
npm -v
```

## 2) Get the code and build (on the server)

Create env file (required for Contact form email):

```bash
# NOTE: Depending on how you cloned/copied the repo on the server, the project
# may live at either:
# - /var/www/thegtservices/app
# - /var/www/thegtservices/app/clarity-sphere-lab
# Always create `.env` in the same folder that contains `.env.example`.

cd /var/www/thegtservices/app

if [ -f .env.example ]; then
    echo "Using project root: $PWD"
elif [ -f clarity-sphere-lab/.env.example ]; then
    cd clarity-sphere-lab
    echo "Using project root: $PWD"
else
    echo "ERROR: Could not find .env.example in /var/www/thegtservices/app"
    exit 1
fi

cp .env.example .env
sudo nano .env
```

Set:

- SMTP variables in `.env` (see `.env.example`) — specifically:
    - `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`
    - `MAIL_FROM=...` (sender)
    - `MAIL_TO=info@thegtservices.com` (receiver)

```bash
sudo mkdir -p /var/www/thegtservices
sudo chown -R $USER:$USER /var/www/thegtservices

cd /var/www/thegtservices
git clone https://github.com/lakshayindia28-rgb/gtservice.git app

cd /var/www/thegtservices/app

if [ -f package.json ]; then
    echo "Using project root: $PWD"
elif [ -f clarity-sphere-lab/package.json ]; then
    cd clarity-sphere-lab
    echo "Using project root: $PWD"
else
    echo "ERROR: Could not find package.json in /var/www/thegtservices/app"
    exit 1
fi

npm ci
npm run build

# Publish build output to the Nginx web root
sudo mkdir -p /var/www/thegtservices/dist
sudo rsync -az --delete dist/ /var/www/thegtservices/dist/
```

After build, Nginx should serve: `/var/www/thegtservices/dist`.

## Contact form email (API)

This repo includes a small Contact API that sends:

- Admin email to `MAIL_TO` (receiver)
- Auto-reply email to the user who filled the form

Start it on the server:

```bash
cd /var/www/thegtservices/app

if [ -f server/contact-api.mjs ]; then
    echo "Using project root: $PWD"
elif [ -f clarity-sphere-lab/server/contact-api.mjs ]; then
    cd clarity-sphere-lab
    echo "Using project root: $PWD"
else
    echo "ERROR: Could not find server/contact-api.mjs under /var/www/thegtservices/app"

    exit 1
fi

npm ci
node server/contact-api.mjs
```

For production, run it as a service (recommended) and proxy requests from Nginx:

- Add an Nginx `location /api/` that proxies to `http://127.0.0.1:8787`
- Keep the API bound to localhost only

## 3) Nginx config (SPA-safe)

Create Nginx site:

```bash
sudo nano /etc/nginx/sites-available/thegtservices.com
```

Use this config:

```nginx
server {
    listen 80;
    listen [::]:80;

    server_name thegtservices.com www.thegtservices.com;

    root /var/www/thegtservices/dist;
    index index.html;

    # SPA routing support
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets aggressively
    location ~* \.(?:css|js|mjs|map|ico|svg|png|jpg|jpeg|gif|webp|woff2?)$ {
        expires 30d;
        add_header Cache-Control "public, max-age=2592000, immutable";
        try_files $uri =404;
    }

    # Optional: basic security headers
    add_header X-Content-Type-Options nosniff;
    add_header X-Frame-Options SAMEORIGIN;
    add_header Referrer-Policy strict-origin-when-cross-origin;
}
```

Enable it:

```bash
sudo rm -f /etc/nginx/sites-enabled/default
sudo ln -s /etc/nginx/sites-available/thegtservices.com /etc/nginx/sites-enabled/thegtservices.com
sudo nginx -t
sudo systemctl reload nginx
```

## 6) GitHub Actions (manual deploy)

This repo includes a GitHub Actions workflow that deploys to your Vultr server **only when you run it manually**:

- Workflow: `.github/workflows/deploy-vultr.yml`
- Trigger: `Actions` → `Deploy (Vultr)` → `Run workflow`
- Input: `branch` (defaults to `main`)

### Required GitHub repo secrets

Add these in GitHub:

`Repo → Settings → Secrets and variables → Actions → New repository secret`

- `VULTR_HOST`: server IP or hostname
- `VULTR_USER`: SSH username (often `root` or a sudo-enabled user)
- `VULTR_SSH_KEY`: private key (PEM) for SSH auth
- `VULTR_PORT`: optional (default `22`)

Note:
- If `VULTR_USER` is not `root`, ensure it has passwordless `sudo` for `nginx`, `systemctl`, `rsync`, and `mkdir` (used during deploy).

### Server setup for GitHub Actions SSH

1) On your local machine, generate a deploy key:

```bash
ssh-keygen -t ed25519 -C "gtservice-deploy" -f ~/.ssh/gtservice_vultr
```

2) Add the public key to your Vultr server:

```bash
ssh-copy-id -i ~/.ssh/gtservice_vultr.pub <user>@<host>
```

3) Put the **private key** content into GitHub secret `VULTR_SSH_KEY`.

## 4) HTTPS (Let’s Encrypt)

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d thegtservices.com -d www.thegtservices.com
```

Certbot will update your Nginx config and set up auto-renewal.

## 5) Updating the site later

Pull changes, rebuild, reload Nginx:

```bash
cd /var/www/thegtservices/app
git pull
npm ci
npm run build
sudo rsync -az --delete dist/ /var/www/thegtservices/dist/
sudo systemctl reload nginx
```

## Optional: One-command deploy script

This repo includes a helper script you can run on the server:

- `scripts/deploy-on-server.sh`

Usage:

```bash
sudo bash /var/www/thegtservices/app/scripts/deploy-on-server.sh
```

## Notes

- If you use React Router and refresh a deep link (example: `/services/product-design`), the `try_files ... /index.html` line is required — otherwise you get 404.
