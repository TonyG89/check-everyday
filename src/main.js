import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import CircleFlags from "vue-circle-flags";
import "vue-circle-flags/dist/vue-circle-flags.css";
// import { Icon } from 'vant';

createApp(App)
.use(CircleFlags)
// .use(Icon)
.mount('#app')
