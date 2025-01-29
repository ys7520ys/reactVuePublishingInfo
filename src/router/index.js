import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
  ],
})

export default router

// 페이지를 생성하려고 한다면 
//   1. routes의 값을 새로 생성한다. 원하는 경로, 이름, 컴포넌트의 값을 설정한다.
//   2. 상단에서 해당 경로에 사용할 컴포넌트를 호출하여 구성한다.