# API Documentation

API ini memungkinkan Anda untuk mengelola data produk dan ketegori, termasuk membuat, mengambil, memperbarui, dan menghapus entri produk. Dibangun menggunakan Node.js dan Sequelize ORM.

# URL Dasar
Api Product
http://localhost:3888/api_product
Api Kategori
http://localhost:3888/api_kategori

## Endpoints

### 1. Menambahkan Produk Baru

**Endpoint**: `/create`  
**Metode**: `POST`  
**Deskripsi**: Endpoint ini memungkinkan pembuatan produk baru.

#### Parameter Permintaan:
- **name**: Nama produk (wajib).
- **desc**: Deskripsi produk (wajib).
- **image**: URL atau path gambar produk (wajib).
- **category_id**: ID kategori tempat produk berada (wajib).

#### Respons Sukses:
- **Status**: `200 OK`
- **Pesan**: `"Berhasil tambahkan product"`

#### Respons Error:
- **Status**: `200 OK`
  - `"Nama product tidak boleh kosong"`
  - `"Deskripsi product tidak boleh kosong"`
  - `"Foto product tidak boleh kosong"`
  - `"Kategori product tidak boleh kosong"`
  - `"Kategori yang anda pilih tidak ada"`
  - `"Nama product sudah ada"`

---

### 2. Mendapatkan Semua Produk

**Endpoint**: `/get`  
**Metode**: `GET`  
**Deskripsi**: Endpoint ini untuk mengambil semua produk.

#### Respons Sukses:
- **Status**: `200 OK`
- **Pesan**: `"Berhasil tampilkan product"`
- **Data**: Array dari semua produk

#### Respons Error:
- **Status**: `500 Internal Server Error`
  - `"Terjadi kesalahan"`

---

### 3. Mendapatkan Produk Berdasarkan ID

**Endpoint**: `/get_id/:id`  
**Metode**: `GET`  
**Deskripsi**: Endpoint ini untuk mengambil produk berdasarkan ID.

#### Parameter Path:
- **id**: ID produk yang akan diambil.

#### Respons Sukses:
- **Status**: `200 OK`
- **Pesan**: `"Berhasil tampilkan product berdasarkan ID"`
- **Data**: Objek produk

#### Respons Error:
- **Status**: `200 OK`
  - `"Data product tidak temukan"`

---

### 4. Mengubah Produk Berdasarkan ID

**Endpoint**: `/update/:id`  
**Metode**: `PUT`  
**Deskripsi**: Endpoint ini untuk memperbarui produk yang ada berdasarkan ID.

#### Parameter Path:
- **id**: ID produk yang akan diperbarui.

#### Parameter Permintaan:
- **name**: Nama baru produk (wajib).
- **desc**: Deskripsi baru produk (wajib).
- **image**: URL atau path gambar baru produk (wajib).
- **category_id**: ID kategori baru produk (wajib).

#### Respons Sukses:
- **Status**: `200 OK`
- **Pesan**: `"Product berhasil diubah"`

#### Respons Error:
- **Status**: `200 OK`
  - `"Nama product tidak boleh kosong"`
  - `"Deskripsi product tidak boleh kosong"`
  - `"Foto product tidak boleh kosong"`
  - `"Kategori product tidak boleh kosong"`
  - `"Data product tidak temukan"`
  - `"Kategori yang anda pilih tidak ada"`
  - `"Nama product sudah ada"`

---

### 5. Menghapus Produk Berdasarkan ID

**Endpoint**: `/delete/:id`  
**Metode**: `DELETE`  
**Deskripsi**: Endpoint ini untuk menghapus produk berdasarkan ID.

#### Parameter Path:
- **id**: ID produk yang akan dihapus.

#### Respons Sukses:
- **Status**: `200 OK`
- **Pesan**: `"Berhasil menghapus product"`

#### Respons Error:
- **Status**: `200 OK`
  - `"Data product tidak temukan"`

---

## Contoh Permintaan

### Menambahkan Produk (POST `/create`)

```json
{
  "name": "Produk A",
  "desc": "Ini adalah Produk A",
  "image": "http://example.com/produkA.jpg",
  "category_id": "1"
}
