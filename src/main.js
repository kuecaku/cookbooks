import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { VueMasonryPlugin } from 'vue-masonry';
import mitt from 'mitt';

const emitter = mitt();
const app = createApp(App);
app.config.globalProperties.emitter = emitter;
app.use(VueMasonryPlugin);
app.use(store).use(router).mount('#app');
