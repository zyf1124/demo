import { createApp } from 'vue'
import App from './App.vue'
// import "./style.css"
import 'vant/lib/index.css';
import router from "@/router/router.js"
let app = createApp(App);
app.use(router).mount('#app')
