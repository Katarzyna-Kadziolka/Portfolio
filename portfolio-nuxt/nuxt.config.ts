// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
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
    ],

})
