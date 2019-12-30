import { fetchNewsList, fetchAskList, fetchJobsList } from '../api';

export default {
  // context = store의 메소드와 속성을 가지고 있어서 commit, state,mutations 으로 접근이 가능함.
  // Destructuring = var a = {a : 10, b: 20, b:30} 을 Destructuring하면 : var { a , b, c } 가 됨. console.log(a) = 10
  FETCH_NEWS({ commit }) {
    fetchNewsList()
      .then(({ data }) => {
        commit('SET_NEWS', data);
      })
      .catch(error => {
        console.log(error);
      })
  },
  FETCH_JOBS({ commit }) {
    fetchJobsList()
      .then(({ data }) => {
        commit('SET_JOBS', data);
      })
      .catch(error => {
        console.log(error);
      })
  },
  FETCH_ASK(context) {
    fetchAskList()
      .then(response => {
        context.commit('SET_ASK', response.data);
      })
      .catch(error => {
        console.log(error);
      })
  },
}