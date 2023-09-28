import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import mainpage from '../views/mainpage.vue'
import Newcard from '../components/Newcard.vue'

import Cafe_1 from '../components/Cafe_1.vue';
import Cafe_2 from '../components/Cafe_2.vue';
import Cafe_3 from '../components/Cafe_3.vue';
import Cafe_4 from '../components/Cafe_4.vue';
import Cafe_5 from '../components/Cafe_5.vue';
import Cafe_6 from '../components/Cafe_6.vue';


const shopRoutes = [
  { name: 'news_1', component: Cafe_1, shop: 'Teddu Coffee' },
  { name: 'news_2', component: Cafe_2, shop: 'The Giant Chiangmai Thailand' },
  { name: 'news_3', component: Cafe_3, shop: 'บ้านลุงปุ๊ด & ป้าเป็ง'},
  { name: 'news_4', component: Cafe_4, shop: 'Woo Ma Ca Moo'},
  { name: 'news_5', component: Cafe_5, shop: 'Atlantis Valley'},
  { name: 'news_6', component: Cafe_6, shop: 'Pirunya Coffee'},

];

const routes = [
  {
    path: '/',
    name: 'main',
    component: mainpage
  },
  {
    path: '/news',
    name: 'allnews',
    component: Newcard
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  }
];

shopRoutes.forEach((route) => {
  routes.push({
    path: `/news/${encodeURIComponent(route.shop)}`,
    name: route.name,
    component: route.component,
    props: true
  });
});

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;
