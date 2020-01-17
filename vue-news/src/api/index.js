import axios from 'axios'

// 1. HTTP Request * Response와 관련된 기본 설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/'
};

// 2. API 함수들을 정리 
// async로 error 처리 
async function fetchNewsList() {
  //return axios.get('https://api.hnpwa.com/v0/news/1.json')
  try {
    const response = await axios.get(`${config.baseUrl}news/1.json`); 
    return response;
  } catch (error) {
    console.log(error);
  }
}

// await을 바로 리턴 
async function fetchAskList() {
  try {
    return await axios.get(`${config.baseUrl}ask/1.json`);
  } catch (error) {
    console.log(error);
  }
 
}

// actions에서 예외 처리
function fetchJobsList() {
  return axios.get(`${config.baseUrl}jobs/1.json`);
}


async function fetchList(pageName) {
  try {
    const response = await axios.get(`${config.baseUrl}${pageName}/1.json`);
    return response;
  } catch (error) {
   console.log(error) 
  }
  
}

function fetchUserInfo(userName) {
  return axios.get(`${config.baseUrl}user/${userName}.json`);
}

function fetchCommentItem(itemId) {
  return axios.get(`${config.baseUrl}item/${itemId}.json`);
}


export {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
  fetchCommentItem,
  fetchList,
}