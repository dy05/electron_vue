import {createRouter, createWebHashHistory} from 'vue-router';
import Home from '/@/components/Home.vue';
import About from '/@/components/About.vue';

const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/about', name: 'About', component: About},
];

export default createRouter({
  routes,
  history: createWebHashHistory(),
});
