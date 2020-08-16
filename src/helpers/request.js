import axios from 'axios'

const request = {
  get(url, headers) {
    return axios.get(url, headers);
  },
  post(url, body, headers) {
    return axios.post(url, body, headers);
  },
};

export default request;