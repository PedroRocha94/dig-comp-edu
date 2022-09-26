import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Quiz from '../pages/Quiz.vue';
import About from '../pages/About.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/quiz',
    name: 'quiz',
    component: Quiz
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;