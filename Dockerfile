# LSS-Wiki – statisches Docker-Image
# Build:   docker build -t lss-wiki .
# Run:     docker run -d -p 8080:80 --name lss-wiki lss-wiki

FROM nginx:1.27-alpine

LABEL org.opencontainers.image.title="LSS-Wiki" \
      org.opencontainers.image.description="Statisches Wiki für Leitstellenspiel.de – ohne Datenbank, ohne PHP" \
      org.opencontainers.image.licenses="MIT"

# Eigene Nginx-Konfiguration (Gzip + Caching für Assets)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Statische Wiki-Dateien
COPY index.html /usr/share/nginx/html/index.html
COPY assets/ /usr/share/nginx/html/assets/

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO- http://127.0.0.1/ >/dev/null 2>&1 || exit 1

CMD ["nginx", "-g", "daemon off;"]
