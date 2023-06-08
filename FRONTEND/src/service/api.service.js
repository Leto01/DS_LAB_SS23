import axios from 'axios';

const SERVER_URL = "http://localhost:4004";
const API_URL = SERVER_URL + "/api";
let pathExtension = 'none';
const throwRequestError= (err)=>{
    console.warn("Error detected on apiService: " + pathExtension);
    console.warn(err.message);
}

export const getApiService = (basepath = '')=>{
    pathExtension = basepath;
    const buildPath = (path) => API_URL + basepath + path;
    return {
        async get(path = ''){
            return axios.get(buildPath(path)).catch(throwRequestError);
        },
        async post(path='', data) {
            return axios.post(buildPath(path), data).catch(throwRequestError);
        },
        async patch(path='', data){
            return axios.patch(buildPath(path), data).catch(throwRequestError);
        },
        async delete(path=''){
            return axios.delete(buildPath(path)).catch(throwRequestError);
        }
    }
}