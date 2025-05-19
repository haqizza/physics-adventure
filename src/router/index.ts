import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import InstructionView from '@/views/InstructionView.vue'
import StageLevel1 from '@/views/GameView/StageLevel1.vue'
import StageLevel2 from '@/views/GameView/StageLevel2.vue'
import StageLevel3 from '@/views/GameView/StageLevel3.vue'
import StageLevel4 from '@/views/GameView/StageLevel4.vue'
import StageLevel5A from '@/views/GameView/StageLevel5A.vue'
import StageLevel5B from '@/views/GameView/StageLevel5B.vue'
import StageLevel5C from '@/views/GameView/StageLevel5C.vue'
import StageLevel6 from '@/views/GameView/StageLevel6.vue'
import StageLevel7 from '@/views/GameView/StageLevel7.vue'
import StageLevel8 from '@/views/GameView/StageLevel8.vue'
import ClosingView from '@/views/ClosingView.vue'
import StageLevel5CQuestion from '@/views/GameView/StageLevel5CQuestion.vue'
import StageLevel5BQuestion from '@/views/GameView/StageLevel5BQuestion.vue'
import StageLevel5AQuestion from '@/views/GameView/StageLevel5AQuestion.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/instruction',
      name: 'instruction',
      component: InstructionView,
    },
    {
      path: '/level-1',
      name: 'level-1',
      component: StageLevel1,
    },
    {
      path: '/level-2',
      name: 'level-2',
      component: StageLevel2,
    },
    {
      path: '/level-3',
      name: 'level-3',
      component: StageLevel3,
    },
    {
      path: '/level-4',
      name: 'level-4',
      component: StageLevel4,
    },
    {
      path: '/level-5a',
      name: 'level-5a',
      component: StageLevel5A,
    },
    {
      path: '/level-5a-question',
      name: 'level-5a-question',
      component: StageLevel5AQuestion,
    },
    {
      path: '/level-5b',
      name: 'level-5b',
      component: StageLevel5B,
    },
    {
      path: '/level-5b-question',
      name: 'level-5b-question',
      component: StageLevel5BQuestion,
    },
    {
      path: '/level-5c',
      name: 'level-5c',
      component: StageLevel5C,
    },
    {
      path: '/level-5c-question',
      name: 'level-5c-question',
      component: StageLevel5CQuestion,
    },
    {
      path: '/level-6',
      name: 'level-6',
      component: StageLevel6,
    },
    {
      path: '/level-7',
      name: 'level-7',
      component: StageLevel7,
    },
    {
      path: '/level-8',
      name: 'level-8',
      component: StageLevel8,
    },
    {
      path: '/closing',
      name: 'closing',
      component: ClosingView,
    }
  ],
})

export default router
