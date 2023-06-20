import { createApp } from 'vue'
import App from './App.vue'
import router from './routers/index.js'

import { 
    Button, 
    message, 
    Drawer 
} from 'ant-design-vue';

import 'ant-design-vue/dist/antd.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/css/bootstrap-utilities.min.css'
const app = createApp(App)
app.use(router)
app.use(Button)
app.use(Drawer)
app.mount('#app')
app.config.globalProperties.$message = message;
