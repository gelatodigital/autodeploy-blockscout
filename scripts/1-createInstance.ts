
import * as dotenv from "dotenv";
import axios, { AxiosInstance } from "axios";
import { instance_id } from "./constants";



const  baseURL = "https://autoscout.services.blockscout.com/api/v1/instances";

const bodyBonito= {
    "name": "everclear",
    "config": {
      "rpc_url": "https://rpc.bonito-testnet.t.raas.gelato.cloud",
      "server_size": "small",
      "chain_type": "",
      "chain_id": "25327",
      "token_symbol": "ETH",
      "instance_url": null,
      "logo_url": "https://arb-blueberry.gelatoscout.com/assets/configs/network_logo_dark.svg",
      "chain_name": "Everclear Mainnet",
      "icon_url": "https://arb-blueberry.gelatoscout.com/assets/configs/network_icon_dark.svg",
      "homeplate_background": null,
      "homeplate_text_color": null
    }
  }

  const bodyEverclear= {
    "name": "everclear",
    "config": {
      "rpc_url": "https://rpc.everclear.raas.gelato.cloud",
      "server_size": "small",
      "chain_type": "",
      "chain_id": "25327",
      "token_symbol": "ETH",
      "instance_url": null,
      "icon_url": "https://drive.google.com/file/d/16yA9pydnb1WC3ysNkY2Fuy9RMnfnH-gb/view",
      "logo_url": "https://drive.google.com/file/d/1vRh7hqODAbudwdqiD16-bvxGxO7O1yMH/view",
      "chain_name": "Everclear Mainnet",
      "homeplate_background": null,
      "homeplate_text_color": null
    }
  }


dotenv.config({ path: ".env" });

const key = process.env.KEY;

const createInstance = async () => {

let result = await axios.post(baseURL,bodyEverclear,{
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': key
    }
  })

  console.log(result.data)


};

createInstance();
