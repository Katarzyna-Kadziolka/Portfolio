// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ["@/assets/style/main.scss"],
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

})
