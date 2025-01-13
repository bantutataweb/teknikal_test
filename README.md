# API Documentation

API ini memungkinkan Anda untuk mengelola data produk dan ketegori, termasuk membuat, mengambil, memperbarui, dan menghapus entri produk. Dibangun menggunakan Node.js dan Sequelize ORM.

# URL Dasar
Api Product
http://localhost:3888/api_product
Api Kategori
http://localhost:3888/api_kategori

# Endpoints

# 1. Menambahkan Produk Baru
Endpoint: /create
Metode: POST
Deskripsi: Endpoint ini memungkinkan pembuatan produk baru.

# Parameter Permintaan:
- name: Nama produk (wajib).
- desc: Deskripsi produk (wajib).
- image: URL atau path gambar produk (wajib).
- category_id: ID kategori tempat produk berada (wajib).

#  Respons Sukses:
- Status: 200 OK
- Pesan: "Berhasil tambahkan product"

# Respons Error:
- Status: 200 OK
- "Nama product tidak boleh kosong"
- "Deskripsi product tidak boleh kosong"
- "Foto product tidak boleh kosong"
- "Kategori product tidak boleh kosong"
- "Kategori yang anda pilih tidak ada"
- "Nama product sudah ada"
