import axios from "axios";

axios.defaults.baseURL = "https://req-api.up.railway.app";
axios.defaults.headers.common['x-access-token'] = localStorage.getItem('token');
