export const useArticles = () => {
    const articles = [
        // 1. MIKROPLASTIK
        {
            id: 1,
            slug: "mikroplastik",
            image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=600&auto=format&fit=crop",
            category: "Daur Ulang",
            date: "12 Jan 2026",
            readTime: "5 Menit Baca",
            title: "Bahaya Mikroplastik bagi Ekosistem Laut",
            description: "Mikroplastik kini ditemukan di hampir seluruh bagian laut. Pelajari dampaknya bagi biota laut dan kesehatan manusia.",
            accentColor: "text-eco-400",
            content: `
            <p class="mb-4">Laut kita sedang menghadapi krisis tak kasat mata. Jutaan ton plastik yang masuk ke lautan setiap tahun tidak menghilang begitu saja; mereka terurai menjadi partikel kecil yang disebut mikroplastik.</p>
            <h3 class="text-2xl font-bold text-white mt-8 mb-4">Apa itu Mikroplastik?</h3>
            <p class="mb-4">Mikroplastik adalah potongan plastik berukuran kurang dari 5 milimeter. Mereka berasal dari dua sumber utama:</p>
            <ul class="list-disc pl-6 mb-6 space-y-2 text-slate-300">
                <li><strong>Primer:</strong> Butiran plastik murni (nurdles) atau microbeads dalam produk kosmetik dan pasta gigi.</li>
                <li><strong>Sekunder:</strong> Hasil penguraian sampah plastik besar (botol, kantong) akibat paparan sinar UV dan gelombang laut.</li>
            </ul>
            <p class="mb-4">Dampaknya sangat mengerikan. Plankton dan ikan kecil memakan partikel ini, mengira itu makanan. Racun dalam plastik kemudian naik ke rantai makanan, hingga akhirnya sampai ke piring makan kita melalui seafood yang kita konsumsi.</p>
            <div class="bg-blue-500/10 p-6 rounded-xl border border-blue-500/20 my-6">
                <h4 class="font-bold text-blue-400 mb-2">Fakta Mengejutkan</h4>
                <p class="text-sm text-slate-300">Penelitian terbaru menemukan bahwa rata-rata manusia menelan mikroplastik setara dengan berat satu kartu kredit setiap minggunya melalui air minum dan makanan.</p>
            </div>
            `
        },

        // 2. KOMPOS
        {
            id: 2,
            slug: "kompos",
            image: "https://images.unsplash.com/photo-1611843467160-25afb8df1074?w=600&auto=format&fit=crop",
            category: "Panduan",
            date: "10 Jan 2026",
            readTime: "7 Menit Baca",
            title: "Cara Membuat Kompos dari Sampah Dapur",
            description: "Jangan buang sisa sayuranmu! Ubah sampah organik rumah tangga menjadi pupuk subur dengan metode sederhana.",
            accentColor: "text-blue-400",
            content: `
            <p class="mb-4">Membuat kompos adalah cara termudah untuk mengurangi limbah rumah tangga hingga 30%. Selain mengurangi beban TPA, Anda juga mendapatkan "emas hitam" untuk menyuburkan tanaman di halaman rumah.</p>
            <h3 class="text-2xl font-bold text-white mt-8 mb-4">Rumus Dasar Kompos</h3>
            <p class="mb-4">Kunci keberhasilan kompos adalah keseimbangan antara bahan Hijau (Nitrogen) dan Coklat (Karbon). Rasio idealnya adalah 1:2 atau 1:3.</p>
            
            <div class="grid md:grid-cols-2 gap-6 my-8">
                <div class="bg-green-500/10 p-5 rounded-xl border border-green-500/20">
                    <h4 class="font-bold text-green-400 mb-2 text-lg">Bahan Hijau (Basah)</h4>
                    <ul class="list-disc pl-4 text-sm text-slate-300 space-y-1">
                        <li>Sisa sayuran & buah</li>
                        <li>Ampas kopi & teh</li>
                        <li>Potongan rumput segar</li>
                        <li>Kulit telur (dihancurkan)</li>
                    </ul>
                </div>
                <div class="bg-yellow-500/10 p-5 rounded-xl border border-yellow-500/20">
                    <h4 class="font-bold text-yellow-400 mb-2 text-lg">Bahan Coklat (Kering)</h4>
                    <ul class="list-disc pl-4 text-sm text-slate-300 space-y-1">
                        <li>Daun kering</li>
                        <li>Kardus tak berlapis (potong kecil)</li>
                        <li>Serbuk gergaji</li>
                        <li>Kertas koran bekas</li>
                    </ul>
                </div>
            </div>

            <h3 class="text-2xl font-bold text-white mt-8 mb-4">Langkah Pembuatan</h3>
            <ol class="list-decimal pl-6 mb-6 space-y-4 text-slate-300">
                <li>Siapkan wadah komposter (bisa ember bekas cat dengan lubang udara).</li>
                <li>Masukkan bahan coklat sebagai lapisan dasar setebal 5-10 cm.</li>
                <li>Masukkan bahan hijau (sampah dapur) di atasnya.</li>
                <li>Tutup kembali dengan lapisan tipis bahan coklat untuk mencegah bau dan lalat.</li>
                <li>Aduk tumpukan seminggu sekali untuk aerasi (suplai oksigen).</li>
                <li>Jaga kelembaban agar seperti "spons yang diperas". Tambahkan air jika terlalu kering.</li>
            </ol>
            <p>Dalam waktu 1 hingga 3 bulan, kompos Anda akan berubah menjadi tanah hitam yang gembur dan siap panen!</p>
            `
        },

        // 3. ZERO WASTE
        {
            id: 3,
            slug: "zero-waste",
            image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&auto=format&fit=crop",
            category: "Gaya Hidup",
            date: "08 Jan 2026",
            readTime: "4 Menit Baca",
            title: "Tips Memulai Hidup Minim Sampah (Zero Waste)",
            description: "Langkah-langkah kecil untuk mengurangi produksi sampah harianmu, mulai dari menolak kantong plastik.",
            accentColor: "text-purple-400",
            content: `
            <p class="mb-4">Zero Waste bukan berarti tidak menghasilkan sampah sama sekali secara instan, melainkan sebuah perjalanan sadar untuk meminimalkan dampak kita terhadap bumi. Tujuannya adalah agar tidak ada sampah yang dikirim ke TPA (Tempat Pembuangan Akhir).</p>
            
            <h3 class="text-2xl font-bold text-white mt-8 mb-4">Prinsip 5R Bea Johnson</h3>
            <p class="mb-6">Untuk memulai gaya hidup ini, pegang teguh prinsip 5R yang harus dilakukan secara berurutan:</p>
            
            <div class="space-y-4 mb-8">
                <div class="border-l-4 border-purple-500 pl-4">
                    <h4 class="text-lg font-bold text-white">1. Refuse (Menolak)</h4>
                    <p class="text-slate-400 text-sm">Katakan tidak pada apa yang tidak Anda butuhkan. Contoh: tolak sedotan plastik, brosur gratis, atau kantong kresek.</p>
                </div>
                <div class="border-l-4 border-purple-500 pl-4">
                    <h4 class="text-lg font-bold text-white">2. Reduce (Mengurangi)</h4>
                    <p class="text-slate-400 text-sm">Kurangi apa yang Anda butuhkan. Belilah barang berkualitas yang awet, bukan fast fashion yang cepat rusak.</p>
                </div>
                <div class="border-l-4 border-purple-500 pl-4">
                    <h4 class="text-lg font-bold text-white">3. Reuse (Menggunakan Kembali)</h4>
                    <p class="text-slate-400 text-sm">Ganti barang sekali pakai dengan yang bisa dipakai ulang. Bawa botol minum, kotak makan, dan tas belanja sendiri.</p>
                </div>
                <div class="border-l-4 border-purple-500 pl-4">
                    <h4 class="text-lg font-bold text-white">4. Recycle (Mendaur Ulang)</h4>
                    <p class="text-slate-400 text-sm">Daur ulang apa yang tidak bisa Anda tolak, kurangi, atau gunakan kembali. Ini bukan solusi utama, tapi langkah terakhir.</p>
                </div>
                <div class="border-l-4 border-purple-500 pl-4">
                    <h4 class="text-lg font-bold text-white">5. Rot (Membusukkan)</h4>
                    <p class="text-slate-400 text-sm">Komposkan sisa makanan dan bahan organik lainnya agar kembali ke alam.</p>
                </div>
            </div>
            <p>Ingat, <em>"We don't need a handful of people doing zero waste perfectly. We need millions of people doing it imperfectly."</em> Mulailah dari langkah kecil hari ini!</p>
            `
        },

        // 4. AI & TEKNOLOGI
        {
            id: 4,
            slug: "ai-sampah",
            image: "https://images.unsplash.com/photo-1512418490979-92798cec1380?w=600&auto=format&fit=crop",
            category: "Teknologi",
            date: "05 Jan 2026",
            readTime: "6 Menit Baca",
            title: "Inovasi AI dalam Pengelolaan Sampah Kota",
            description: "Bagaimana kota-kota pintar menggunakan kecerdasan buatan untuk mengoptimalkan rute truk sampah dan pemilahan.",
            accentColor: "text-teal-400",
            content: `
            <p class="mb-4">Pengelolaan sampah di kota besar adalah tantangan logistik yang luar biasa. Namun, teknologi Artificial Intelligence (AI) dan Internet of Things (IoT) mulai merevolusi cara kita menangani limbah.</p>
            
            <h3 class="text-2xl font-bold text-white mt-8 mb-4">1. Smart Bins & Sensor IoT</h3>
            <p class="mb-4">Tong sampah pintar kini dilengkapi sensor ultrasonik yang dapat mendeteksi seberapa penuh kapasitasnya. Data ini dikirim ke pusat komando secara real-time.</p>
            <ul class="list-disc pl-6 mb-6 text-slate-300">
                <li>Truk sampah hanya datang saat tong penuh, menghemat bahan bakar hingga 40%.</li>
                <li>Mencegah sampah meluap yang menyebabkan bau dan penyakit.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mt-8 mb-4">2. Robot Pemilah Otomatis</h3>
            <p class="mb-4">Di fasilitas daur ulang (MRF), robot bertenaga AI dengan kamera Computer Vision dapat memilah sampah jauh lebih cepat dan akurat daripada manusia.</p>
            <div class="bg-dark-900 border border-white/10 p-6 rounded-2xl mb-6">
                <p class="italic text-slate-400 text-center">"Sistem seperti EcoLens yang Anda gunakan saat ini adalah versi mini dari teknologi Computer Vision yang digunakan di pabrik daur ulang raksasa untuk membedakan plastik jenis PET dan HDPE dalam milidetik."</p>
            </div>

            <h3 class="text-2xl font-bold text-white mt-8 mb-4">3. Prediksi Timbulan Sampah</h3>
            <p>Dengan data historis, AI dapat memprediksi lonjakan sampah saat hari raya atau event tertentu, memungkinkan dinas kebersihan untuk mengalokasikan sumber daya lebih efektif sebelum masalah terjadi.</p>
            `
        },

        // 5. KODE PLASTIK
        {
            id: 5,
            slug: "kode-plastik",
            image: "https://images.unsplash.com/photo-1591193686104-fddba4d0e4d8?w=600&auto=format&fit=crop",
            category: "Daur Ulang",
            date: "02 Jan 2026",
            readTime: "5 Menit Baca",
            title: "Mengenal Kode Daur Ulang Plastik (1-7)",
            description: "Jangan salah pilah! Pahami arti simbol segitiga angka pada kemasan plastik agar proses daur ulang efektif.",
            accentColor: "text-eco-400",
            content: `
            <p class="mb-4">Pernahkah Anda melihat simbol segitiga dengan angka di bawah botol kemasan? Itu adalah <em>Resin Identification Code</em>. Memahaminya sangat krusial agar kita tidak mencampur plastik yang tidak bisa didaur ulang bersama yang bisa.</p>
            
            <div class="space-y-6 my-8">
                <div class="flex gap-4 items-start">
                    <div class="w-12 h-12 flex-shrink-0 bg-eco-500/20 text-eco-400 font-bold rounded-lg flex items-center justify-center text-xl">1</div>
                    <div>
                        <h4 class="text-white font-bold text-lg">PET / PETE (Polyethylene Terephthalate)</h4>
                        <p class="text-slate-400 text-sm mt-1">Botol air mineral, botol soda. <span class="text-eco-400 font-bold">Sangat mudah didaur ulang.</span> Jangan gunakan ulang botol ini (sekali pakai).</p>
                    </div>
                </div>

                <div class="flex gap-4 items-start">
                    <div class="w-12 h-12 flex-shrink-0 bg-eco-500/20 text-eco-400 font-bold rounded-lg flex items-center justify-center text-xl">2</div>
                    <div>
                        <h4 class="text-white font-bold text-lg">HDPE (High-Density Polyethylene)</h4>
                        <p class="text-slate-400 text-sm mt-1">Botol sampo, jerigen deterjen, tutup botol galon. <span class="text-eco-400 font-bold">Mudah didaur ulang.</span> Plastik ini keras dan tahan panas.</p>
                    </div>
                </div>

                <div class="flex gap-4 items-start">
                    <div class="w-12 h-12 flex-shrink-0 bg-red-500/20 text-red-400 font-bold rounded-lg flex items-center justify-center text-xl">3</div>
                    <div>
                        <h4 class="text-white font-bold text-lg">PVC (Polyvinyl Chloride)</h4>
                        <p class="text-slate-400 text-sm mt-1">Pipa paralon, mainan anak, kabel. <span class="text-red-400 font-bold">Sangat SULIT didaur ulang</span> dan berbahaya jika dibakar karena melepaskan klorin.</p>
                    </div>
                </div>

                <div class="flex gap-4 items-start">
                    <div class="w-12 h-12 flex-shrink-0 bg-yellow-500/20 text-yellow-400 font-bold rounded-lg flex items-center justify-center text-xl">5</div>
                    <div>
                        <h4 class="text-white font-bold text-lg">PP (Polypropylene)</h4>
                        <p class="text-slate-400 text-sm mt-1">Gelas air kemasan, sedotan, wadah makanan (Tupperware). <span class="text-yellow-400 font-bold">Bisa didaur ulang</span>, tahan panas, dan aman untuk makanan.</p>
                    </div>
                </div>
                <div class="flex gap-4 items-start">
                    <div class="w-12 h-12 flex-shrink-0 bg-red-500/20 text-red-400 font-bold rounded-lg flex items-center justify-center text-xl">6</div>
                    <div>
                        <h4 class="text-white font-bold text-lg">PS (Polystyrene)</h4>
                        <p class="text-slate-400 text-sm mt-1">Styrofoam, sendok garpu plastik murah. <span class="text-red-400 font-bold">Hampir TIDAK BISA didaur ulang</span> dan karsinogenik jika terkena panas. Hindari sebisa mungkin!</p>
                    </div>
                </div>
            </div>
            `
        },

        // 6. BARANG REUSABLE
        {
            id: 6,
            slug: "reusable-items",
            image: "https://images.unsplash.com/photo-1598737944400-f3fe63b9f32e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fHBsYXN0aWN8ZW58MHx8MHx8fDA%3D",
            category: "Gaya Hidup",
            date: "28 Des 2025",
            readTime: "3 Menit Baca",
            title: "Pengganti Plastik Sekali Pakai yang Stylish",
            description: "Tampil keren sambil menjaga bumi dengan rekomendasi produk reusable yang awet dan fungsional.",
            accentColor: "text-purple-400",
            content: `
            <p class="mb-4">Beralih ke barang *reusable* (guna ulang) bukan hanya soal menyelamatkan penyu di laut, tapi juga soal penghematan finansial jangka panjang dan estetika gaya hidup.</p>
            
            <h3 class="text-2xl font-bold text-white mt-8 mb-4">Starter Pack Zero Waste</h3>
            
            <div class="grid md:grid-cols-3 gap-6 mb-8">
                <div class="bg-dark-900 p-4 rounded-xl border border-white/10 text-center hover:border-purple-500/50 transition-colors">
                    <div class="text-4xl mb-3">🥤</div>
                    <h4 class="font-bold text-white mb-2">Tumbler</h4>
                    <p class="text-xs text-slate-400">Hemat jutaan rupiah setahun dari membeli air kemasan. Pilih bahan Stainless Steel agar awet.</p>
                </div>
                <div class="bg-dark-900 p-4 rounded-xl border border-white/10 text-center hover:border-purple-500/50 transition-colors">
                    <div class="text-4xl mb-3">🛍️</div>
                    <h4 class="font-bold text-white mb-2">Tote Bag</h4>
                    <p class="text-xs text-slate-400">Lipat kecil dan taruh di jok motor/tas. Satu tas kanvas bisa menggantikan 500+ kantong kresek.</p>
                </div>
                <div class="bg-dark-900 p-4 rounded-xl border border-white/10 text-center hover:border-purple-500/50 transition-colors">
                    <div class="text-4xl mb-3">🥢</div>
                    <h4 class="font-bold text-white mb-2">Cutlery Set</h4>
                    <p class="text-xs text-slate-400">Sendok, garpu, dan sedotan stainless. Higienis karena milik sendiri, dan bebas sampah saat jajan.</p>
                </div>
            </div>

            <h3 class="text-2xl font-bold text-white mt-8 mb-4">Kesehatan Wanita & Zero Waste</h3>
            <p class="mb-4">Bagi wanita, penggunaan pembalut kain (Menstrual Pad) atau Menstrual Cup adalah revolusi besar. Pembalut sekali pakai mengandung pemutih dan plastik yang butuh ratusan tahun terurai. Menstrual Cup bisa dipakai hingga 10 tahun!</p>
            `
        },

        // 7. ECOBRICK
        {
            id: 7,
            slug: "ecobrick",
            image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=600&auto=format&fit=crop",
            category: "Panduan",
            date: "20 Des 2025",
            readTime: "8 Menit Baca",
            title: "Membuat Ecobrick dari Botol Bekas",
            description: "Solusi kreatif untuk sampah plastik yang tidak bisa didaur ulang. Ubah botol bekas menjadi material bangunan.",
            accentColor: "text-blue-400",
            content: `
            <p class="mb-4">Apa yang harus kita lakukan dengan bungkus kopi sachet, kemasan mie instan, atau plastik kresek rusak yang ditolak bank sampah? Jawabannya: <strong>Ecobrick</strong>.</p>
            
            <h3 class="text-2xl font-bold text-white mt-8 mb-4">Apa itu Ecobrick?</h3>
            <p class="mb-4">Ecobrick adalah botol PET yang diisi padat dengan limbah non-biological (plastik bersih & kering) hingga menjadi keras seperti bata. Ini adalah cara "mengamankan" plastik agar tidak terurai menjadi mikroplastik di alam.</p>

            <h3 class="text-2xl font-bold text-white mt-8 mb-4">Cara Membuat yang Benar</h3>
            <ul class="space-y-4 text-slate-300">
                <li class="flex gap-3">
                    <span class="font-bold text-blue-400">1. Bersihkan & Keringkan:</span>
                    Plastik harus bersih dari sisa makanan dan 100% kering. Plastik basah akan membusuk di dalam botol dan menghasilkan gas metana (bisa meledak!).
                </li>
                <li class="flex gap-3">
                    <span class="font-bold text-blue-400">2. Potong Kecil:</span>
                    Gunting plastik yang besar agar mudah dimasukkan ke mulut botol.
                </li>
                <li class="flex gap-3">
                    <span class="font-bold text-blue-400">3. Padatkan:</span>
                    Gunakan tongkat kayu/bambu. Masukkan plastik sedikit demi sedikit lalu tumbuk hingga sangat padat.
                </li>
                <li class="flex gap-3">
                    <span class="font-bold text-blue-400">4. Cek Kepadatan:</span>
                    Ecobrick yang baik tidak akan penyok jika ditekan/diinjak. Berat standar botol 600ml minimal adalah 200 gram.
                </li>
            </ul>

            <h3 class="text-2xl font-bold text-white mt-8 mb-4">Kegunaan</h3>
            <p>Ecobrick bisa disusun menjadi kursi, meja, dinding taman, bahkan struktur bangunan modular. Ini adalah solusi penyimpanan plastik jangka panjang (ratusan tahun) yang aman.</p>
            `
        },

        // 8. SAMPAH DIGITAL
        {
            id: 8,
            slug: "digital-waste",
            image: "https://images.unsplash.com/photo-1481437156560-3205f6a55735?w=600&auto=format&fit=crop",
            category: "Gaya Hidup",
            date: "15 Des 2025",
            readTime: "5 Menit Baca",
            title: "Minimalisme Digital: Bersihkan Sampah Elektronik",
            description: "Bukan hanya fisik, sampah digital juga memakan energi. Pelajari cara membersihkan jejak karbon digitalmu.",
            accentColor: "text-purple-400",
            content: `
            <p class="mb-4">Setiap email yang tersimpan, foto di cloud, dan streaming video membutuhkan energi listrik di pusat data (Server) yang menyala 24 jam. Ini menghasilkan emisi karbon nyata yang sering kita lupakan.</p>
            
            <h3 class="text-2xl font-bold text-white mt-8 mb-4">Jejak Karbon Internet</h3>
            <p class="mb-4">Internet menyumbang sekitar 3.7% dari emisi gas rumah kaca global, setara dengan seluruh industri penerbangan dunia. "Sampah Digital" adalah data yang kita simpan tapi tidak pernah kita gunakan lagi.</p>

            <h3 class="text-2xl font-bold text-white mt-8 mb-4">Cara Detox Sampah Digital</h3>
            <div class="bg-dark-900 p-6 rounded-2xl border border-white/10">
                <ul class="space-y-4">
                    <li class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-bold">1</div>
                        <span class="text-slate-300">Hapus ribuan email lama (terutama newsletter promosi & spam).</span>
                    </li>
                    <li class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-bold">2</div>
                        <span class="text-slate-300">Unsubscribe dari email yang tidak pernah Anda baca.</span>
                    </li>
                    <li class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-bold">3</div>
                        <span class="text-slate-300">Hapus foto/video duplikat di Cloud Storage (Google Drive/iCloud).</span>
                    </li>
                    <li class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-bold">4</div>
                        <span class="text-slate-300">Kurangi kualitas streaming video jika hanya mendengarkan audionya (misal Youtube musik).</span>
                    </li>
                </ul>
            </div>
            <p class="mt-6">Membersihkan perangkat digital tidak hanya menghemat energi bumi, tapi juga membuat gadget Anda lebih cepat dan pikiran lebih tenang.</p>
            `
        },
    ];

    return { articles };
}