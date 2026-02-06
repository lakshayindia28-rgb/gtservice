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

```bash
sudo mkdir -p /var/www/thegtservices
sudo chown -R $USER:$USER /var/www/thegtservices

cd /var/www/thegtservices
git clone https://github.com/lakshayindia28-rgb/gtservice.git app

cd /var/www/thegtservices/app
npm ci
npm run build

# Publish build output to the Nginx web root
sudo mkdir -p /var/www/thegtservices/dist
sudo rsync -az --delete dist/ /var/www/thegtservices/dist/
```

After build, Nginx should serve: `/var/www/thegtservices/dist`.

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
- If you want CI/CD later, we can add a GitHub Actions workflow to build and `rsync` the `dist/` folder to your Vultr server.
