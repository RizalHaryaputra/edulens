import type { Config } from 'tailwindcss'

export default <Config>{
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            colors: {
                // Warna Background Gelap Premium
                dark: {
                    950: '#020617', // Latar belakang utama (Very dark slate)
                    900: '#0f172a', // Latar belakang kartu (Dark slate)
                    800: '#1e293b', // Border halus
                },
                // Warna Aksen Hijau Neon
                eco: {
                    400: '#4ade80', // Hijau terang (Glow/Text)
                    500: '#22c55e', // Hijau utama (Button)
                    600: '#16a34a', // Hijau gelap (Hover)
                    
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'hero-glow': 'radial-gradient(circle at center, rgba(74, 222, 128, 0.15) 0%, rgba(2, 6, 23, 0) 70%)',
            }
        }
    }
}