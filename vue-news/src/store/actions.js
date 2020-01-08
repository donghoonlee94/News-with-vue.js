import {
   fetchNewsList,
   fetchAskList,
   fetchJobsList,
   fetchUserInfo,
   fetchCommentItem,
   fetchList 
  } from '../api/index.js';

export default {
  // context = store의 메소드와 속성을 가지고 있어서 commit, state,mutations 으로 접근이 가능함.
  // Destructuring = var a = {a : 10, b: 20, b:30} 을 Destructuring하면 var {a, b, c} = a; console.log(a) = 10
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
  FETCH_USER({commit}, name) {
    fetchUserInfo(name)
      .then(({data}) => {
        commit('SET_USER', data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  FETCH_ITEM({commit}, id) {
    fetchCommentItem(id)
      .then(({data}) => {
        commit('SET_ITEM', data)
      })
      .catch();
  },
  FETCH_LIST({commit}, pageName) {
    fetchList(pageName)
     .then(({data}) => {
        commit('SET_LIST', data)
     })
     .catch((error) => {
       console.log(error)
     })


  }
}