import axios from 'axios';

const instance = axios.create({
  baseURL: 'localhost:5000/api',
  headers: {
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});
instance.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';
instance.defaults.headers.get['Content-Type'] = 'application/json';

instance.interceptors.request.use(conf => {
  // custom conf
  // eg: add header token to conf
  return conf;
});

function onResponse(response) {
  // handle response
  return response;
}

function onError(error) {
  // handle error
  return Promise.reject(error);
}

instance.interceptors.response.use(onResponse, onError);

export default instance;
