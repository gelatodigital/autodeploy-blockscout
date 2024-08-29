
import * as dotenv from "dotenv";
import axios, { AxiosInstance } from "axios";
import { instance_id } from "./constants";



const  baseURL = `https://autoscout.services.blockscout.com/api/v1/instances/${instance_id}/config`;



const body= {
  "config": {
    "logo_url": "https://raas.gelato.network/images/OnGelato.svg",
  }
}


dotenv.config({ path: ".env" });

const key = process.env.KEY;

const update = async () => {

let {data} = await axios.patch(baseURL,body,{
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': key
    }
  })


console.log(data)

};

update();
