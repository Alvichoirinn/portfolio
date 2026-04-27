const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

// Data proyek portfolio
const projects = [
    { id: 1, title: 'Dashboard HRIS', category: 'Data Visualization', description: 'Visualisasi data performa menggunakan Power BI untuk mengetahui income, performance, dan kinerja karyawan dari setiap departemen.', technologies: ['Power BI', 'Excel'], image: 'image/dashboard.png' },
    { id: 2, title: 'Sistem Prestasi Mahasiswa', category: 'Implementasi Website', description: 'Perancangan sistem informasi prestasi mahasiswa.', technologies: ['Laravel', 'CSS'], image: 'image/sistem_prestasi.png' },
    { id: 3, title: 'Analisis Proses Bisnis UKM', category: 'Business Process', description: 'Studi kasus pemetaan proses bisnis dan rekomendasi perbaikan untuk UMKM makanan ringan.', technologies: ['BPMN', 'Interview'], image: 'image/tracerstudy.png' },
    { id: 4, title: 'Dashboard HRIS (2)', category: 'Data Visualization', description: 'Visualisasi data performa menggunakan Power BI.', technologies: ['Power BI', 'Excel'], image: 'image/dashboard.png' },
    { id: 5, title: 'Analisis Proses Bisnis UKM 2', category: 'Business Process', description: 'Studi kasus kedua pemetaan proses bisnis.', technologies: ['BPMN', 'Interview'], image: 'image/entry1.jpeg' },
    { id: 6, title: 'Analisis Proses Bisnis UKM 3', category: 'Business Process', description: 'Studi kasus ketiga pemetaan proses bisnis.', technologies: ['BPMN', 'Interview'], image: 'image/gambar.jpg' }
];

const server = http.createServer((req, res) => {
    // CORS Header
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    // API Projects
    if (req.url === '/api/projects') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(projects));
        return;
    }
    
    // Detail Proyek /project/:id
    const projectMatch = req.url.match(/^\/project\/(\d+)$/);
    if (projectMatch) {
        const projectId = parseInt(projectMatch[1]);
        const project = projects.find(p => p.id === projectId);
        
        if (project) {
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${project.title} | Alvi Choi</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700&display=swap" rel="stylesheet">
    <style>body { font-family: 'Plus Jakarta Sans', sans-serif; }</style>
</head>
<body class="bg-gradient-to-br from-indigo-50 via-pink-50 to-amber-50 min-h-screen">
    <nav class="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-white/80 backdrop-blur-md">
        <div class="max-w-4xl mx-auto flex justify-between items-center">
            <a href="/" class="font-extrabold text-xl bg-gradient-to-r from-indigo-600 via-pink-500 to-amber-500 bg-clip-text text-transparent">portfolio*</a>
            <a href="/" class="text-indigo-600 font-semibold hover:underline">← Kembali</a>
        </div>
    </nav>
    <main class="pt-24 pb-16 px-6">
        <div class="max-w-3xl mx-auto">
            <a href="/" class="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600 mb-6">← Kembali</a>
            <div class="bg-white rounded-3xl shadow-xl overflow-hidden">
                <div class="h-64 overflow-hidden">
                    <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover">
                </div>
                <div class="p-8">
                    <span class="text-xs font-bold text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full">${project.category}</span>
                    <h1 class="text-3xl font-bold mt-4 mb-4">${project.title}</h1>
                    <div class="flex gap-2 mb-6">${project.technologies.map(t => `<span class="text-xs bg-slate-100 px-3 py-1 rounded">${t}</span>`).join('')}</div>
                    <p class="text-lg text-slate-600">${project.description}</p>
                    <a href="/" class="inline-block mt-8 bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-6 py-3 rounded-xl font-bold">Kembali ke Home</a>
                </div>
            </div>
        </div>
    </main>
</body>
</html>`);
            return;
        }
    }
    
    // Serve static files
    let filePath = req.url === '/' ? '/index.html' : req.url;
    let fullPath = path.join(__dirname, filePath);
    let ext = path.extname(fullPath);
    let contentType = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg' }[ext] || 'text/plain';
    
    fs.readFile(fullPath, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end('File tidak ditemukan');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        }
    });
});

server.listen(PORT, () => {
    console.log(`\n🚀 Server: http://localhost:${PORT}`);
    console.log(`📄 API: http://localhost:${PORT}/api/projects`);
    console.log(`🔗 Contoh: http://localhost:${PORT}/project/1\n`);
});