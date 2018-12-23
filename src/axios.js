import axios from 'axios';


const instance = axios.create({
   baseURL: 'https://czu-movie-dbs.firebaseio.com'
});

export default instance;