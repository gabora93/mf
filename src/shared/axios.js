import axios from 'axios';


export default (data) => {
    console.log(data)
    return axios.get('/api/vi/data/user/',data);
}