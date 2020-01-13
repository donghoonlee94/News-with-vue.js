import Vue from 'vue';
import VueRouter from 'vue-router';
// CreateListView High Order Component 를 통한 컴포넌트 재활용. CreateListView.js만 사용하여 모두 내려줌.
import NewsView from '../views/NewsView.vue';
import JobsView from '../views/JobsView.vue';
import AskView from '../views/AskView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';
// import createListView from '../views/CreateListView.js'
import Bus from "../utils/bus.js"
import { store } from '../store/index.js';

// 라우트 네비게이션 : 특정 URL로 접근하기 전의 동작을 정의하는 속성 (함수) , 
// 컴포넌트 라이프 사이클 훅, created : 컴포넌트가 생성 되자마자 호출되는 로직 

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
      component : NewsView,
      // component: createListView('NewsView')
      // beforeEnter (이동할 라우트, 현재 라우트, next())
      // promise chaining으로 dispatch를 실행한 후, .then으로 이어갈 수 있음.

      beforeEnter : (to, from, next) => {
        Bus.$emit('start:spinner')
        store.dispatch('FETCH_LIST', to.name)
          .then(() => next())
          .catch((error) => {
            console.log(error);
          });
      },
    },
    {
      path: '/ask',
      name: 'ask',
      component : AskView,
      // component: createListView('AskView')
      beforeEnter: (to, from, next) => {
        Bus.$emit('start:spinner')
        store.dispatch('FETCH_LIST', to.name)
          .then(() => next())
          .catch((error) => {
            console.log(error);
          });
      },    
    },
    {
      path: '/jobs',
      name: 'jobs',
      component : JobsView,
      // component: createListView('JobsView')
      beforeEnter: (to, from, next) => {
        Bus.$emit('start:spinner')
        store.dispatch('FETCH_LIST', to.name)
          .then(() => next())
          .catch((error) => {
            console.log(error);
          });
      },   
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