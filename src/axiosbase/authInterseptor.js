import axios from "axios";


const authFetch = axios.create( {
baseURL : "https://real-pear-fly-kilt.cyclic.app"
     
})



  
  authFetch.interceptors.request.use(
    (request) => {
 
        
      
      request.headers["Authorization"] =
      `Bearer ${localStorage.getItem("token")}`
      console.log('request sent');
      return request;
    },
    (error) => {
      //to handle or save data in cloud
      return Promise.reject(error);
    }
  );
  
  authFetch.interceptors.response.use(
    (response) => {
      console.log('got response');
      return response;
    },
    (error) => {
      console.log(error);
    }
  );
  

export default authFetch;