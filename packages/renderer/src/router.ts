import {createRouter, createWebHashHistory} from 'vue-router';
import Home from '/@/components/Home.vue';
import About from '/@/components/About.vue';

const routes = [
  {path: '/', name: 'Home', component: About},
  {path: '/about', name: 'About', component: Home},
];

export default createRouter({
  routes,
  history: createWebHashHistory(),
});
