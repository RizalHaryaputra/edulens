<template>
    <div class="relative overflow-hidden">

        <section class="relative pt-12 pb-20 lg:pt-16 lg:pb-32 px-4 lg:px-16">

            <div
                class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-eco-500/20 rounded-full blur-[120px] -z-10 opacity-50 pointer-events-none">
            </div>
            <div
                class="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] -z-10 pointer-events-none">
            </div>

            <div class="container mx-auto px-6">
                <div class="grid lg:grid-cols-2 gap-12 items-center">

                    <div class="text-center lg:text-left">
                        <div
                            class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-eco-400 text-xs font-semibold mb-6 backdrop-blur-md">
                            <span class="relative flex h-2 w-2">
                                <span
                                    class="animate-ping absolute inline-flex h-full w-full rounded-full bg-eco-400 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-2 w-2 bg-eco-500"></span>
                            </span>
                            AI Powered Waste Detection
                        </div>

                        <h1 class="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-tight mb-6">
                            Kelola Sampah <br />
                            <span class="text-transparent bg-clip-text bg-gradient-to-r from-eco-400 to-teal-400">
                                Lebih Cerdas.
                            </span>
                        </h1>

                        <p class="text-lg text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            EcoLens menggunakan kecerdasan buatan untuk mengidentifikasi jenis sampahmu dalam hitungan
                            detik. Scan, pilah, dan jaga bumi kita tetap hijau.
                        </p>

                        <div class="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">

                            <button @click="scrollToScan"
                                class="w-full sm:w-auto px-8 py-4 bg-eco-500 hover:bg-eco-400 text-dark-950 font-bold rounded-2xl shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-all transform hover:-translate-y-1">
                                Mulai Scan Sekarang
                            </button>

                            <NuxtLink to="/blog"
                                class="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-2xl hover:bg-white/10 backdrop-blur-md transition-all">
                                Pelajari Daur Ulang
                            </NuxtLink>
                        </div>

                        <div
                            class="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center gap-4 text-slate-500 text-sm justify-center lg:justify-start">
                            <span>Didukung teknologi dari:</span>
                            <div
                                class="flex items-center gap-4 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                                <span class="font-bold text-white flex items-center gap-2">
                                    Google Gemini
                                </span>
                                <span class="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
                                <span class="font-bold text-white">Nuxt 3</span>
                            </div>
                        </div>
                    </div>

                    <div class="relative hidden lg:block">
                        <div
                            class="absolute inset-0 bg-gradient-to-tr from-eco-500/20 to-transparent rounded-full blur-3xl">
                        </div>

                        <div class="relative z-10 animate-float">
                            <div
                                class="bg-dark-900/40 border border-white/10 backdrop-blur-xl p-6 rounded-3xl shadow-2xl relative">
                                <div class="flex items-center justify-between mb-6">
                                    <div class="flex items-center gap-2">
                                        <div class="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div class="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                    <div class="text-xs text-slate-500 font-mono">ecolens_ai_core.exe</div>
                                </div>

                                <div
                                    class="relative rounded-xl overflow-hidden aspect-[4/3] bg-dark-950/50 border border-white/5 group">
                                    <div
                                        class="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:20px_20px]">
                                    </div>

                                    <div
                                        class="absolute top-0 left-0 w-full h-1 bg-eco-500/50 shadow-[0_0_15px_#22c55e] animate-scan">
                                    </div>

                                    <div class="absolute inset-0 flex items-center justify-center">
                                        <div class="absolute inset-0 flex items-center justify-center">

                                            <div
                                                class="absolute w-64 h-64 rounded-full border border-eco-500/20 border-dashed animate-[spin_10s_linear_infinite]">
                                            </div>

                                            <div
                                                class="absolute w-48 h-48 rounded-full border-2 border-t-eco-500/50 border-r-transparent border-b-eco-500/10 border-l-transparent animate-[spin_3s_linear_infinite_reverse]">
                                            </div>

                                            <div
                                                class="relative flex items-center justify-center w-36 h-36 bg-eco-500/10 rounded-full backdrop-blur-sm shadow-[0_0_30px_rgba(34,197,94,0.3)] animate-pulse">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-eco-400"> 
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                </svg>

                                            </div>

                                            <div
                                                class="absolute w-32 h-32 border-2 border-white/20 rounded-lg scale-150 opacity-50">
                                            </div>
                                            <div
                                                class="absolute w-42 h-42 border border-eco-500/30 rounded-lg scale-125 opacity-30">
                                            </div>

                                        </div>
                                    </div>

                                    <div
                                        class="absolute bottom-4 right-4 bg-dark-900/90 backdrop-blur border border-eco-500/30 px-4 py-2 rounded-lg shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                        <div class="flex items-center gap-2">
                                            <span class="w-2 h-2 rounded-full bg-eco-500 animate-pulse"></span>
                                            <span class="text-xs font-bold text-eco-400">PET Plastic Detected</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                class="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-dark-800/30 rounded-3xl border border-white/5 backdrop-blur-sm">
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <section id="scan-area" class="py-24 bg-dark-900 border-t border-white/5">
            <div class="container mx-auto px-6 text-center">
                <h2 class="text-2xl font-bold text-white mb-4">Area Deteksi Sampah</h2>
                <p class="text-slate-400">Komponen Scanner akan dipasang ulang di sini pada tahap berikutnya.</p>
            </div>
        </section>

    </div>
</template>

<script setup>
// Smooth Scroll Function
const scrollToScan = () => {
    const el = document.getElementById('scan-area');
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};
</script>

<style scoped>
/* Animasi Scan Garis Hijau */
@keyframes scan {
    0% {
        top: 0%;
        opacity: 0;
    }

    10% {
        opacity: 1;
    }

    90% {
        opacity: 1;
    }

    100% {
        top: 100%;
        opacity: 0;
    }
}

.animate-scan {
    animation: scan 3s linear infinite;
}

/* Animasi Floating (Melayang) */
@keyframes float {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-20px);
    }
}

.animate-float {
    animation: float 6s ease-in-out infinite;
}
</style>