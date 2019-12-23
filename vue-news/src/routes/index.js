import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import JobsView from '../views/JobsView.vue';
import AskView from '../views/AskView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  // mode:histoty : # remove
  mode: 'history',
  routes: [
    // redirect : 특정 path 일 때 redirect : 'url 주소' 로 보냄 
    {
      path: '/',
      redirect: '/news',
    },
    {
      //path : url에 대한 정보
      // component: url 주소로 갔을 때 표시될 컴포넌트
      path: '/news',
      component : NewsView,
    },
    {
      path: '/ask',
      component : AskView,
    },
    {
      path: '/jobs',
      component : JobsView,
    },        
    {
      path: '/item',
      component: ItemView,
    },        
    {
      path: '/user',
      component: UserView,
    },                
  ]
});