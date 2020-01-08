import Vue from 'vue';
import VueRouter from 'vue-router';
// CreateListView High Order Component 를 통한 컴포넌트 재활용. CreateListView.js만 사용하여 모두 내려줌.
// import NewsView from '../views/NewsView.vue';
// import JobsView from '../views/JobsView.vue';
// import AskView from '../views/AskView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';
import createListView from '../views/CreateListView.js'

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
      name: 'news',
      // component : NewsView,
      component: createListView('NewsView')
    },
    {
      path: '/ask',
      name: 'ask',
      // component : AskView,
      component: createListView('AskView')
    },
    {
      path: '/jobs',
      name: 'jobs',
      // component : JobsView,
      component: createListView('JobsView')
    },        
    {
      path: '/item/:id',
      component: ItemView,
    },        
    {
      path: '/user/:id',
      component: UserView,
    },                
  ]
});