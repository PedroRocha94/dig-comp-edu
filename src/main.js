import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Sidebar from './components/Sidebar.vue';

import './assets/sass/_layout.scss';

const app = createApp(App);

app.use(router);

app.component('Sidebar', Sidebar);

app.mount('#app');