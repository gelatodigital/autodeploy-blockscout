
import * as dotenv from "dotenv";
import axios, { AxiosInstance } from "axios";
import { instance_id } from "./constants";



const  baseURL = `https://autoscout.services.blockscout.com/api/v1/instances/${instance_id}/status:update`;

const body= {
  "action": "RESTART"
}
dotenv.config({ path: ".env" });

const key = process.env.KEY;

const restart = async () => {

let {data} = await axios.post(baseURL,body,{
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': key
    }
  })


console.log(data)

};

restart();
