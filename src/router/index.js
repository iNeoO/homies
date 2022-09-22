import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/history',
    name: 'History',
    component: () => import(/* webpackChunkName: "history" */ '../views/History.vue'),
  },
  // {
  //   path: '/schedule',
  //   name: 'schedule',
  //   component: () => import(/* webpackChunkName: "schedule" */ '@/views/Schedule.vue'),
  // },
  {
    path: '/how-to-come',
    name: 'location',
    component: () => import(/* webpackChunkName: "location" */ '@/views/Location.vue'),
  },
  // {
  //   path: '/news',
  //   name: 'news',
  //   component: () => import(/* webpackChunkName: "news" */ '@/views/News.vue'),
  // },
  // {
  //   path: '/teams',
  //   name: 'teams',
  //   component: () => import(/* webpackChunkName: "teams" */ '@/views/Teams.vue'),
  // },
  // {
  //   path: '/how-to-sign',
  //   name: 'registration',
  //   component: () => import(/* webpackChunkName: "registration" */ '@/views/Registration.vue'),
  // },
  // {
  //   path: '/shop',
  //   name: 'shop',
  //   component: () => import(/* webpackChunkName: "shop" */ '@/views/Shop.vue'),
  // },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */ '@/views/Contact.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
