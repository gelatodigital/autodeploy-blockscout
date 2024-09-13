
import * as dotenv from "dotenv";
import axios, { AxiosInstance } from "axios";
import { instance_id } from "./constants";



const  baseURL = `https://autoscout.services.blockscout.com/api/v1/instances/${instance_id}/config`;



const bodyEverclear= {
  "config": {
   //custom_domain:"scan.everclear.org",
   stats_enabled: true
  }
}

  

const bodyEvetum = {
  "config": { 
    "NEXT_PUBLIC_ROLLUP_L1_BASE_URL":"https://eth-sepolia.blockscout.com/",
    "NEXT_PUBLIC_ROLLUP_L2_WITHDRAWAL_URL":"https://testnet-bridge.eh-dev.app/bridge/eventum-testnet"
  }
}

dotenv.config({ path: ".env" });

const key = process.env.KEY;

const update = async () => {

let result = await axios.patch(baseURL,bodyEverclear,{
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': key
    }
  })

};

update();
