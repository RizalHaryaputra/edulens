<template>
    <div
        class="min-h-screen bg-dark-950 flex flex-col items-center justify-center text-center p-6 relative overflow-hidden font-sans">

        <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-eco-500/10 rounded-full blur-[120px] pointer-events-none">
        </div>

        <div class="relative z-10">
            <div
                class="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-eco-400 to-teal-500 mb-4 animate-pulse">
                404
            </div>

            <h1 class="text-3xl md:text-4xl font-bold text-white mb-4">
                Halaman Tidak Ditemukan
            </h1>

            <p class="text-slate-400 max-w-md mx-auto mb-8 text-lg">
                Ups! Sepertinya Anda tersesat. Halaman yang Anda cari mungkin sudah didaur ulang atau memang tidak
                pernah ada.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <button @click="handleError"
                    class="px-8 py-3 bg-eco-500 hover:bg-eco-400 text-dark-950 font-bold rounded-full transition-all shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)]">
                    Kembali ke Beranda
                </button>

                <!-- <button @click="openChatHelp"
                    class="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-full transition-all">
                    Tanya EcoBot
                </button> -->
            </div>
        </div>

    </div>
</template>

<script setup>
// Mengambil props error dari Nuxt
const props = defineProps({
    error: Object
});

// Fungsi untuk membersihkan error dan redirect ke home
const handleError = () => {
    clearError({ redirect: '/' });
};

// Fungsi opsional jika user ingin tanya bot (Redirect ke home tapi user bisa buka chat)
const openChatHelp = () => {
    clearError({ redirect: '/' });
    // Di real app, kita bisa trigger state global untuk auto-open chat
};

useHead({
    title: '404 - Halaman Tidak Ditemukan | EcoLens'
})
</script>