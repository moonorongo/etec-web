import os
import zipfile
import ftplib
import requests

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

    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        print(f"Contents of {url}:\n{response.text[:500]}...")  # Print first 500 chars
    else:
        print(f"Failed to fetch URL. Status code: {response.status_code}")
        print(f"Response content:\n{response.text}")


# === MAIN EXECUTION ===
if __name__ == "__main__":
    folder_to_zip = "out"
    zip_file_name = "out.zip"

    ftp_details = {
        "host": "ftp.espaciotec.com.ar",
        "user": "espaciot",
        "password": "KojiKabuto1972",
        "remote_path": "public_html/out.zip"
    }

    target_url = "https://espaciotec.com.ar/unzipper.php?pwd=ni4Diche!"

    zip_folder(folder_to_zip, zip_file_name)
    
    upload_via_ftp(zip_file_name, ftp_details["host"], ftp_details["user"], ftp_details["password"], ftp_details["remote_path"])
    
    get_url_contents(target_url)
