
import * as dotenv from "dotenv";
import axios, { AxiosInstance } from "axios";
import { instance_id } from "./constants";


const  baseURL = `https://autoscout.services.blockscout.com/api/v1/instances/${instance_id}/deployments/current`;


dotenv.config({ path: ".env" });

const key = process.env.KEY;

const getStatus= async () => {

let {data} = await axios.get(baseURL,{
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': key
    }
  })


console.log(data)
console.log(data.status)

};

getStatus();
