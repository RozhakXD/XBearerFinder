# 🚀 XBearerFinder: Ekstensi Penangkap Bearer Token untuk X/Twitter 🔍
![XBearerFinder Logo](https://github.com/user-attachments/assets/a06523f6-1378-4443-bca7-15b78d5ad3a9)
🔍 **XBearerFinder** adalah ekstensi Chrome yang otomatis mendapatkan Bearer Token dari X (Twitter). Berguna bagi pengembang dan peneliti keamanan untuk debugging, pengujian, atau analisis jaringan tanpa perlu membuka alat pengembang.

## 📌 Fitur Utama
- **Deteksi Otomatis**: Secara otomatis menangkap Bearer Token dari permintaan API X/Twitter.
- **Penyimpanan Aman**: Token dapat dilihat di popup extension tanpa perlu login.
- **Salin Sekali Klik**: Salin token dengan mudah menggunakan tombol "Copy Token".
- **Hapus Data**: Hapus token yang terdeteksi dengan tombol "Clear".

## 📜 Izin yang Digunakan  
- **`host_permissions`** → Mengizinkan ekstensi mengakses semua halaman di `https://*.twitter.com/*` dan `https://*.x.com/*` untuk membaca permintaan API.  
- **`storage`** → Digunakan untuk menyimpan token sementara selama sesi berlangsung, tanpa menyimpan data secara permanen.  
- **`webRequest`** → Memungkinkan ekstensi mencegat dan membaca permintaan API untuk mendeteksi Bearer Token secara otomatis.  

## 🛠️ Cara Penggunaan  
1. **Buka X (Twitter)** dan pastikan Anda sudah login.  
2. **Navigasi ke halaman** yang melakukan permintaan API (misalnya, Twitter Web).  
3. **Klik ikon ekstensi XBearerFinder** di bilah ekstensi browser.  
4. **Lihat Bearer Token** yang muncul dalam popup ekstensi.  
5. **Klik "Copy Token"** untuk menyalin token ke clipboard.  
6. **Gunakan tombol "Clear"** untuk menghapus token dari tampilan jika diperlukan.

## 📸 Tangkapan Layar
![Image](https://github.com/user-attachments/assets/60c81401-ca81-4393-983c-d38750c015d2)

## ⚠️ Disclaimer
XBearerFinder hanya untuk keperluan pengujian dan debugging API. Penggunaan token yang diperoleh harus mematuhi kebijakan X (Twitter).

## 📄 License
Lisensi: **MIT** - Bebas digunakan dan dimodifikasi dengan syarat yang berlaku.
