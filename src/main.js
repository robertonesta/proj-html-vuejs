import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'
import "./assets/scss/app.scss"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
    faFacebook,
    faInstagram,
    faTwitter,
    faYoutube,
    faPinterest,
  } from '@fortawesome/free-brands-svg-icons'
import {
  faLink
} from '@fortawesome/free-solid-svg-icons'
  library.add(faFacebook, faInstagram, faTwitter, faYoutube, faPinterest, faLink)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
