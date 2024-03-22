import {Article} from "~/types/article";
import grpc from "~/assets/images/grpc.png"
import vue from "~/assets/images/vue.png"

export const articles: Article[] = [
    {
        Date: "13.02.2023",
        Title: "How to create a client for the gRPC API in .NET?",
        Description: "gRPC is a compelling interface (about 10 times faster than REST) developed by Google under an open-source license. It can run in any environment. Its implementation is based on Protocol Buffers, a data serialization mechanism independent of the programming language. It is based on the HTTP/2 protocol, which supports bidirectional streaming - the connection is maintained so the server and client can send multiple requests.",
        MediumUrl: "https://medium.com/@kasiakadziolka/how-to-create-a-client-for-the-grpc-api-in-net-8d2a5f92a255",
        BulldogjobUrl: "https://bulldogjob.pl/readme/jak-stworzyc-klienta-do-api-grpc-w-net",
        PhotoUrl: grpc
    },
    {
        Date: "24.11.2023",
        Title: "Implementation of i18n in the Vue 3 Composition API",
        Description: "i18n stands for internationalisation, or internationalisation. It is a term used to describe processes and techniques for adapting software to different languages and cultures, without changing the source code. i18n enables not only the translation of texts but also the formatting of dates, times, currencies, and numbers.",
        MediumUrl: "https://medium.com/@kasiakadziolka/implementation-of-i18n-in-the-vue-3-composition-api-ac29bef63c24",
        BulldogjobUrl: "https://bulldogjob.pl/readme/jak-zaimplementowac-i18n-w-vue-3-composition-api",
        PhotoUrl: vue
    }
]