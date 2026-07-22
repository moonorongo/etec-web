#!/usr/bin/env bash
set -euo pipefail

# Deploy de espaciotec.com.ar (Mac / Linux)
# 1) genera la carpeta estatica "out" con next build
# 2) upload.py la comprime, la sube por FTP y llama a unzipper.php en el server

cd "$(dirname "$0")"

npm run build

# En Mac "python" suele no existir; usar python3 si esta disponible
if command -v python3 >/dev/null 2>&1; then
  python3 upload.py
else
  python upload.py
fi
