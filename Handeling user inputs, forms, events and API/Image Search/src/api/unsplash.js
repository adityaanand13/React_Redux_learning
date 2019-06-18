 import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com",
     headers: {
         Authorization:
             'Client-ID 021c0145a9c3bd6f511c6f981621bb5ce058d76c556c98a4cad210a68bef8008'
     }
 });