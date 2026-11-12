# UTS PAW2 – RESTful API Laundry

## Deskripsi

Project ini dibuat untuk memenuhi tugas UTS mata kuliah Pengembangan Aplikasi Web 2. API ini digunakan untuk mengelola data outlet dan pesanan laundry dengan menggunakan Express.js dan MongoDB.

## Desain Database

Pada project ini terdapat dua model, yaitu `PesananLaundry` dan `Outlet`.

- **Embedding (`pengambilan`)**: Data alamat dan jam pengambilan disimpan langsung di dalam dokumen pesanan karena kedua informasi tersebut merupakan bagian dari pesanan dan selalu digunakan bersama.
- **Referencing (`outletId`)**: Data outlet dibuat terpisah karena satu outlet bisa digunakan oleh beberapa pesanan. Jadi, pesanan cukup menyimpan ID outlet yang dipilih. Informasi outlet bisa ditampilkan menggunakan `populate()`.

## Daftar Endpoint

Base URL: `http://localhost:3000`

| Method | Endpoint | Keterangan |
|---|---|---|
| GET | `/outlet` | Melihat semua outlet |
| POST | `/outlet` | Menambahkan outlet |
| GET | `/pesanan-laundry` | Melihat semua pesanan |
| POST | `/pesanan-laundry` | Menambahkan pesanan |
| GET | `/pesanan-laundry/:id` | Melihat detail pesanan |

### Filter dan Sorting

Contoh filter pesanan berdasarkan layanan:

`GET /pesanan-laundry?layanan=kilat`

Contoh mengurutkan nomor nota dari kecil ke besar:

`GET /pesanan-laundry?sort=1`

Filter dan sorting juga bisa digunakan bersamaan:

`GET /pesanan-laundry?layanan=kilat&sort=1`

## Cara Menjalankan Project

1. Pastikan Node.js dan MongoDB sudah terpasang dan MongoDB sedang berjalan.
2. Buka folder project melalui VS Code.
3. Jalankan perintah berikut untuk memasang dependency:

```bash
npm install
```

4. Buat file `.env` dengan mengikuti isi `.env.example`, lalu sesuaikan konfigurasi database dan API Key.
5. Jalankan server:

```bash
npm run dev
```

Jika berhasil, server akan berjalan di `http://localhost:3000` dan terhubung ke MongoDB.

## Pengujian

Pengujian API dilakukan menggunakan Postman. Pengujian meliputi penambahan outlet, pembuatan pesanan, filter layanan, sorting nomor nota, melihat detail pesanan, serta pengujian validasi dan duplikasi data.

File `.env` tidak disertakan dalam repository agar konfigurasi pribadi dan API Key tetap aman.