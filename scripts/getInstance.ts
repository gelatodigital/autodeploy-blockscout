
import * as dotenv from "dotenv";
import axios, { AxiosInstance } from "axios";



const  baseURL = "https://autoscout.services.blockscout.com/api/v1/instances";



dotenv.config({ path: ".env" });

const key = process.env.KEY;

const createInstance = async () => {

let {data} = await axios.get(baseURL,{
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': key
    }
  })


console.log(data)

};

createInstance();
