// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        "@/assets/style/main.scss",
        "@fortawesome/fontawesome-svg-core/styles.css"
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/style/_colors.scss" as *;',
                },
            },
        },
    },
    modules: [
        '@nuxt/content',
        ['@nuxtjs/google-fonts', {
            families: {
                'Nunito': true,
                download: true,
                inject: true
            }
        }]
    ],
    app: {
        head: {
            title: 'Katarzyna Kądziołka'
        }
    },
    build: {
        transpile: [
            '@fortawesome/fontawesome-svg-core',
            '@fortawesome/free-solid-svg-icons',
            '@fortawesome/free-regular-svg-icons',
            '@fortawesome/free-brands-svg-icons',
            '@fortawesome/vue-fontawesome'
        ]
    }
})
