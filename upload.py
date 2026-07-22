import os
import zipfile
import ftplib
import urllib.request
import urllib.error


# === Step 0: Cargar credenciales desde .env ===
def load_env(path=".env"):
    """Loader minimo de .env (sin dependencias externas)."""
    if not os.path.exists(path):
        return
    with open(path, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            key, _, value = line.partition("=")
            os.environ.setdefault(key.strip(), value.strip())


def require_env(key):
    value = os.environ.get(key)
    if not value:
        raise SystemExit(f"Falta la variable '{key}'. Configurala en .env (ver .env.example).")
    return value


# === Step 1: Compress the "out" folder ===
def zip_folder(folder_path, zip_name):
    with zipfile.ZipFile(zip_name, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for root, _, files in os.walk(folder_path):
            for file in files:
                full_path = os.path.join(root, file)
                arcname = os.path.relpath(full_path, folder_path)
                zipf.write(full_path, arcname)
    print(f"Folder '{folder_path}' compressed to '{zip_name}'.")


# === Step 2: Upload the zip to hosting via FTP ===
def upload_via_ftp(zip_file_path, ftp_host, ftp_user, ftp_password, remote_path):
    with ftplib.FTP(ftp_host) as ftp:
        ftp.login(ftp_user, ftp_password)
        with open(zip_file_path, 'rb') as f:
            ftp.storbinary(f"STOR {remote_path}", f)
        print(f"Uploaded '{zip_file_path}' to '{ftp_host}/{remote_path}'.")


# === Step 3: Get the contents of a URL ===
def get_url_contents(url):
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                      "AppleWebKit/537.36 (KHTML, like Gecko) "
                      "Chrome/122.0.0.0 Safari/537.36"
    }

    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as response:
            body = response.read().decode("utf-8", errors="replace")
            print(f"Contents of {url}:\n{body[:500]}...")  # Print first 500 chars
    except urllib.error.HTTPError as e:
        print(f"Failed to fetch URL. Status code: {e.code}")
        print(f"Response content:\n{e.read().decode('utf-8', errors='replace')}")


# === MAIN EXECUTION ===
if __name__ == "__main__":
    load_env()

    folder_to_zip = "out"
    zip_file_name = "out.zip"

    ftp_details = {
        "host": require_env("FTP_HOST"),
        "user": require_env("FTP_USER"),
        "password": require_env("FTP_PASSWORD"),
        "remote_path": require_env("FTP_REMOTE_PATH"),
    }

    target_url = require_env("UNZIPPER_URL")

    zip_folder(folder_to_zip, zip_file_name)

    upload_via_ftp(zip_file_name, ftp_details["host"], ftp_details["user"], ftp_details["password"], ftp_details["remote_path"])

    get_url_contents(target_url)
