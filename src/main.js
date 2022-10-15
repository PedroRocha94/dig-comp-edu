import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Sidebar from './components/Sidebar.vue';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import './assets/sass/_layout.scss';

import 'primeicons/primeicons.css';

import Button from 'primevue/button';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';

const app = createApp(App);

app.use(router);

app.component('Sidebar', Sidebar);
app.component('Button', Button);
app.component('TabView', TabView);
app.component('TabPanel', TabPanel);


app.mount('#app');