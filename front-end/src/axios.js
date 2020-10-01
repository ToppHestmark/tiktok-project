import axios from 'axios';

const instance = axios.create({
  baseURL: "https://tiktok-backend-mernn.herokuapp.com/",
});

export default instance;