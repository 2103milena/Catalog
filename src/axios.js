import axios from 'axios';

const instance = axios.create({
    baseURL : 'http://justforkicks.duckdns.org:8080/api/listResults?'
});

export default instance;