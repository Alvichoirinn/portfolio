# Portfolio Alvi Choi - Backend

Backend sederhana untuk portfolio dengan link proyek yang dapat diklik.

## Struktur File

```
porto/
├── index.html          # Halaman utama portfolio
├── server.js           # Backend server (Express.js)
├── package.json        # Dependencies
├── image/              # Folder gambar
└── README.md           # File ini
```

## Cara Menjalankan

### 1. Install Dependencies
```bash
npm install
```

### 2. Jalankan Server
```bash
npm start
```

Server akan berjalan di **http://localhost:3000**

## Fitur

- **Halaman Portfolio**: http://localhost:3000
- **API Projects**: http://localhost:3000/api/projects
- **Detail Proyek**: http://localhost:3000/project/{id}

  Contoh:
  - http://localhost:3000/project/1 (Dashboard HRIS)
  - http://localhost:3000/project/2 (Sistem Prestasi Mahasiswa)
  - http://localhost:3000/project/3 (Analisis Proses Bisnis UKM)

## Link Proyek

| No | Nama Proyek | URL |
|----|-------------|-----|
| 1 | Dashboard HRIS | /project/1 |
| 2 | Sistem Prestasi Mahasiswa | /project/2 |
| 3 | Analisis Proses Bisnis UKM | /project/3 |
| 4 | Dashboard HRIS (2) | /project/4 |
| 5 | Analisis Proses Bisnis UKM 2 | /project/5 |
| 6 | Analisis Proses Bisnis UKM 3 | /project/6 |

## Teknologi

- Node.js
- Express.js
- HTML/CSS (Tailwind CSS)

---

© 2026 Alvi Choirinnikmah