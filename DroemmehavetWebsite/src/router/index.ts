import { createRouter, createWebHistory } from 'vue-router'
import Forside from '@/views/Forside.vue'
import AppFeatures from '@/components/forside/AppFeatures.vue'
import VideoExplainer from '@/components/forside/VideoExplainer.vue'
import KickStarter from '@/components/forside/KickStarter.vue'
import Team from '@/components/forside/Team.vue'

const routes = [
  /* Routes som brugeren har adgang til */
  {
    path: '/',
    name: 'forside',
    component: Forside
  },
  {
    path: '/#app_features',
    name: 'app_features',
    component: AppFeatures
  },
  {
    path: '/#video_explainer',
    name: 'video_explainer',
    component: VideoExplainer
  },
  {
    path: '/#kick_starter',
    name: 'kick_starter',
    component: KickStarter
  },
  {
    path: '/teamet',
    name: 'teamet',
    component: Team
  },

  /* Routes som admin har adgang til */
  {
    path: '/editor',
    name: 'editor',
    component: ()=> import('@/views/Editor.vue')
  },
  {
    path: '/editor:edit_feature',
    name: 'edit_feature',
    component: ()=> import('@/components/editor/FeatureEditor.vue')
  },
  {
    path: '/editor:edit_person:',
    name: 'edit_person',
    component: ()=> import('@/components/editor/PersonEditor.vue')
  },
  {
    path: '/editor:edit_video:',
    name: 'edit_video',
    component: ()=> import('@/components/editor/VideoExplainerEditor.vue')
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
