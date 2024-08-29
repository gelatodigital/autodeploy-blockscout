
import * as dotenv from "dotenv";
import axios, { AxiosInstance } from "axios";



const  baseURL = "https://autoscout.services.blockscout.com/api/v1/instances";

const body= {
    "name": "multipool-devnet",
    "config": {
      "rpc_url": "https://rpc-123420000406.raas-testnet.gelato.digital",
      "server_size": "small",
      "chain_type": "ARBITRUM",
      "chain_id": "123420000406",
      "token_symbol": "MUL",
      "instance_url": null,
      "logo_url": "https://arb-blueberry.gelatoscout.com/assets/configs/network_logo_dark.svg",
      "chain_name": "Multipool Devnet",
      "icon_url": "https://arb-blueberry.gelatoscout.com/assets/favicon/favicon.ico",
      "homeplate_background": null,
      "homeplate_text_color": null}
  }


dotenv.config({ path: ".env" });

const key = process.env.KEY;

const createInstance = async () => {

let result = await axios.post(baseURL,body,{
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': key
    }
  })

  console.log(result.data)


};

createInstance();
