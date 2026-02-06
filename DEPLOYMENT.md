# Deployment (Vultr Ubuntu 22.04 + Nginx)

This project is a Vite + React SPA. Recommended deployment is: build the static site (`dist/`) and serve it with Nginx.

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

## 2) Get the code and build

```bash
sudo mkdir -p /var/www/thegtservices
sudo chown -R $USER:$USER /var/www/thegtservices

cd /var/www/thegtservices
git clone https://github.com/lakshayindia28-rgb/gtservice.git .
npm ci
npm run build
```

After build, your static site is in `dist/`.

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
cd /var/www/thegtservices
git pull
npm ci
npm run build
sudo systemctl reload nginx
```

## Optional: GitHub Actions auto-deploy (recommended)

This repo includes a workflow that:

- Builds the app on GitHub Actions
- Uploads `dist/` to your Vultr server via `rsync` over SSH

Workflow file: `.github/workflows/deploy-vultr.yml`

### One-time server setup

1) Make sure Nginx root points to the same folder you deploy into.

If you use the workflow defaults below, set:

```nginx
root /var/www/thegtservices/dist;
```

2) Ensure the deploy path exists and Nginx can read it:

```bash
sudo mkdir -p /var/www/thegtservices/dist
sudo chown -R www-data:www-data /var/www/thegtservices
sudo chmod -R 755 /var/www/thegtservices
```

Note: If you deploy as `root`, ownership isn’t required, but it’s cleaner to deploy with a non-root user.

### GitHub Secrets to add

Go to: **GitHub repo → Settings → Secrets and variables → Actions → New repository secret**

Add these secrets:

- `VULTR_HOST`: `65.20.83.83`
- `VULTR_SSH_USER`: `root` (or your deploy user)
- `VULTR_SSH_PORT`: `22`
- `VULTR_DEPLOY_PATH`: `/var/www/thegtservices/dist`
- `VULTR_SSH_PRIVATE_KEY`: your SSH private key (the one matching the public key installed on the server)
- `VULTR_KNOWN_HOSTS`: the server host key entry (recommended for secure SSH)

To generate `VULTR_KNOWN_HOSTS` locally:

```bash
ssh-keyscan -H 65.20.83.83
```

Copy the entire output line(s) into the secret value.

### Triggering a deploy

- Any push to `main` triggers deploy automatically
- Or run it manually from **Actions → Deploy to Vultr (thegtservices.com) → Run workflow**

## Notes

- If you use React Router and refresh a deep link (example: `/services/product-design`), the `try_files ... /index.html` line is required — otherwise you get 404.
- If you want CI/CD later, we can add a GitHub Actions workflow to build and `rsync` the `dist/` folder to your Vultr server.
