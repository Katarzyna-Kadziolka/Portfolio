import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
    fas,
    faUser,
    faBriefcase,
    faLaptopCode,
    faStar,
    faBook,
    faTimeline,
    faEraser,
    faBars,
    faAngleUp,
    faAngleDown,
    faXmark,
    faNewspaper
} from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(fas)
library.add(faUser)
library.add(faBriefcase)
library.add(faLaptopCode)
library.add(faStar)
library.add(faBook)
library.add(faTimeline)
library.add(faEraser)
library.add(faBars)
library.add(faAngleUp)
library.add(faAngleDown)
library.add(faXmark)
library.add(faLinkedinIn)
library.add(faGithub)
library.add(faNewspaper)
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})

