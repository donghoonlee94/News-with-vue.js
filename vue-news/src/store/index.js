import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutaions.js';
import actions from './actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: [],
  },
  getters: {
    fetchedAsk(state) {
      return state.ask;
    },
  },
  mutations: mutations,
  actions: actions,
});