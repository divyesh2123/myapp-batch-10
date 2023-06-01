import axios  from "axios";


export const authFetch = axios.create({

    baseURL : "https://real-pear-fly-kilt.cyclic.app",
    headers : {

        Authorization : "Bearer " + localStorage.getItem("token") 

    
    }
})

