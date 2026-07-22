#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

# Servidor PHP local para probar el panel /admin.
# El sitio corre aparte con: npm run dev  (puerto 3008)
#
# Panel:  http://localhost:8000/admin/
# El panel guarda en public/data/horario.json, que Next dev sirve en
# http://localhost:3008/data/horario.json  -> el sitio lo lee igual que en prod.

if ! command -v php >/dev/null 2>&1; then
  echo "PHP no esta instalado. Instalalo con:  brew install php"
  exit 1
fi

echo "Panel:  http://localhost:8000/admin/"
echo "Sitio:  http://localhost:3008/  (acordate de tener 'npm run dev' corriendo)"
echo ""
php -S localhost:8000 -t public
