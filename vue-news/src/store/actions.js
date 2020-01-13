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
  // return fetchNewsList 로 return 값을 줘야 한다. return 값을 주지 않으면 비동기 통신 순서가 꼬이게 되고, .then 이후의 코드가 비동기로 실행되기 때문에 순서가 맞지 않는다.

  FETCH_NEWS({ commit }) {
    return fetchNewsList()
      .then(({ data }) => {
        commit('SET_NEWS', data);
      })
      .catch(error => {
        console.log(error);
      })
  },
  FETCH_JOBS({ commit }) {
    return fetchJobsList()
      .then(({ data }) => {
        commit('SET_JOBS', data);
      })
      .catch(error => {
        console.log(error);
      })
  },
  FETCH_ASK(context) {
    return fetchAskList()
      .then(response => {
        context.commit('SET_ASK', response.data);
      })
      .catch(error => {
        console.log(error);
      })
  },
  FETCH_USER({commit}, name) {
    return fetchUserInfo(name)
      .then(({data}) => {
        commit('SET_USER', data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  FETCH_ITEM({commit}, id) {
    return fetchCommentItem(id)
      .then(({data}) => {
        commit('SET_ITEM', data)
      })
      .catch();
  },
  FETCH_LIST({commit}, pageName) {
    return fetchList(pageName)
     .then(({data}) => {
        commit('SET_LIST', data)
     })
     .catch((error) => {
       console.log(error)
     })
  }
}