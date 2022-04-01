import axios from "axios";

const Ruta = 'https://fakerestapi.azurewebsites.net/api/v1/Books/'

// For GET requests
axios.interceptors.request.use(
  (req) => {
     // Add configurations here
     return req;
  },
  (err) => {
    console.log(err);
     return Promise.reject(err);
  }
);

// For POST requests
axios.interceptors.response.use(
  (res) => {
     // Add configurations here
     if (res.status === 201) {
        console.log('Posted Successfully');
     }
     return res;
  },
  (err) => {
    console.log(err);
     return Promise.reject(err);
  }
);


axios.create({
  baseURL: String(Ruta),
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }
});





const MethodPost = async (url , data) =>  await( axios.post(url ,
  {...data , 
  "csrf-token": localStorage.getItem("CSRF_TOKEN"), 
  "ACCESS_TOKEN": await localStorage.getItem('Token')
} , {
  headers: await GetHeadersConfig(),
}));

const GetHeadersConfig = async () => {
  return await {
    "CSRF-Token": await localStorage.getItem("CSRF_TOKEN"),
    "ACCESS_TOKEN": await localStorage.getItem('Token'),
    "Access-Control-Allow-Origin": "*",
    'Access-Control-Allow-Methods': 'DELETE, PUT, GET, POST',
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
    
  }
}

const AllAxios = { 
  get : axios.get,
  post : MethodPost,
  put : axios.put,
  delete : axios.delete
};

export default AllAxios;


