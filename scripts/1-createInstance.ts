import * as dotenv from "dotenv";
import axios, { AxiosInstance } from "axios";
import { instance_id } from "./constants";

const baseURL = "https://autoscout.services.blockscout.com/api/v1/instances";


const bodyEverclear = {
  name: "everclear",
  config: {
    rpc_url: "https://rpc.everclear.raas.gelato.cloud",
    server_size: "small",
    chain_type: "",
    chain_id: "25327",
    token_symbol: "ETH",
    instance_url: null,
    icon_url:
      "https://drive.google.com/file/d/16yA9pydnb1WC3ysNkY2Fuy9RMnfnH-gb/view",
    logo_url:
      "https://drive.google.com/file/d/1vRh7hqODAbudwdqiD16-bvxGxO7O1yMH/view",
    chain_name: "Everclear Mainnet",
    homeplate_background: null,
    homeplate_text_color: null,
  },
};

const bodyAthene = {
  "name": "athene-parthenon",
  "config": {
    "rpc_url": "https://rpc.parthenon.athenescan.io/",
    "rpc_ws_url": "wss://ws.parthenon.athenescan.io/",
    "server_size": "small",
    "chain_id": "281123",
    "token_symbol": "ETH",
    "logo_url": "https://athene.network/api/v1.0/blockchain/Logo_Light.svg",
    "logo_url_dark": "https://athene.network/api/v1.0/blockchain/Logo_Dark.svg",
    "chain_name": "Athene Parthenon",
    "icon_url": "https://athene.network/api/v1.0/blockchain/Icon_Light.svg",
    "icon_url_dark": "https://athene.network/api/v1.0/blockchain/Icon_Dark.svg",
    "og_image_url": "https://athene.network/api/v1.0/blockchain/OG.png",
    "homeplate_background": "#22A183"
  }
}

dotenv.config({ path: ".env" });

const key = process.env.KEY;

const createInstance = async () => {
  let result = await axios.post(baseURL, bodyAthene, {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": key,
    },
  });

  console.log(result.data);
};

createInstance();
