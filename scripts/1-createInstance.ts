
import * as dotenv from "dotenv";
import axios, { AxiosInstance } from "axios";
import { instance_id } from "./constants";



const  baseURL = "https://autoscout.services.blockscout.com/api/v1/instances";

const bodyBonito= {
    "name": "everclear",
    "config": {
      "rpc_url": "https://rpc.bonito-testnet.t.raas.gelato.cloud",
      "server_size": "small",
      "chain_type": "ARBITRUM",
      "chain_id": "25327",
      "token_symbol": "ETH",
      "instance_url": null,
      "logo_url": "https://arb-blueberry.gelatoscout.com/assets/configs/network_logo_dark.svg",
      "chain_name": "Everclear Mainnet",
      "icon_url": "https://arb-blueberry.gelatoscout.com/assets/configs/network_icon_dark.svg",
      "homeplate_background": null,
      "homeplate_text_color": null}
  }

  const bodyEverclear= {
    "name": "everclear",
    "config": {
      "rpc_url": "https://rpc.everclear.raas.gelato.cloud",
      "server_size": "small",
      "chain_type": "ARBITRUM",
      "chain_id": "25327",
      "token_symbol": "ETH",
      "instance_url": null,
      "logo_url": "https://drive.google.com/file/d/1vRh7hqODAbudwdqiD16-bvxGxO7O1yMH/view",
      "chain_name": "Everclear Mainnet",
      "icon_url": "https://drive.google.com/file/d/16yA9pydnb1WC3ysNkY2Fuy9RMnfnH-gb/view",
      "homeplate_background": null,
      "homeplate_text_color": null}
  }
  // const body= {
  //   "name": "eventum-testnet",
  //   "config": {
  //     "rpc_url": "https://testnet-rpc.eh-dev.app",
  //     "server_size": "small",
  //     "chain_type": "OPTIMISM",
  //     "chain_id": "16181",
  //     "token_symbol": "ETH",
  //     "instance_url": null,
  //     "logo_url": "https://eth-sepolia.blockscout.com/assets/network_logo.png",
  //     "chain_name": "Eventum Testnet",
  //     "icon_url": "https://eth-sepolia.blockscout.com/assets/network_icon.png",
  //     "homeplate_background": null,
  //     "homeplate_text_color": null,
  //     "optimism": {
  //       "l1_rpc_url": "https://sepolia.drpc.org",
  //       "l1_system_config_contract": "0x3bdeD3f1AbC874ccb26ec5492384bfB07Fa33467",
  //       "l1_batch_blockscout_blobs_api_url": "https://eth-sepolia.blockscout.com/api/v2/blobs",
  //       "l1_batch_celestia_blobs_api_url": "",
  //       "l1_batch_blocks_chunk_size": "4",
  //       "l2_batch_genesis_block_number": "0",
  //       "l1_output_oracle_contract": "0x6Baf32dBb647d39e76C18c5E19912038c4AB360A",
  //       "l1_deposits_batch_size": "500",
  //       "l2_withdrawals_start_block": "1",
  //       "l2_message_passer_contract": "0x4200000000000000000000000000000000000016"
  //     },
  //   }
  // }

  const body= {
    "name": "eventum-testnet",
    "config": {
      rpc_url: 'https://testnet-rpc.eh-dev.app/',
      server_size: 'small',
      chain_type: 'OPTIMISM',
      node_type: 'UNSPECIFIED_NODE_TYPE',
      chain_id: '16181',
      token_symbol: 'ETH',
      custom_domain: null,
      logo_url: 'https://eth-sepolia.blockscout.com/assets/network_logo.png',
      icon_url: 'https://eth-sepolia.blockscout.com/assets/network_icon.png',
      logo_url_dark: null,
      chain_name: 'Eventum Testnet',
      icon_url_dark: null,
      homeplate_background: null,
      homeplate_text_color: null,
      is_testnet: null,
      stats_enabled: null,
      rpc_ws_url: null,
      public_rpc_url: null,
      wallet_connect_project_id: null,
      eip_1559_elasticity: null,
      navigation_layout: 'UNSPECIFIED_NAVIGATION_LAYOUT',
      favicon_url: null,
      og_image_url: null,
      color_theme: 'UNSPECIFIED_COLOR_THEME',
      identicon: 'UNSPECIFIED_IDENTICON',
      chain_spec: null,
      optimism: {
        l1_rpc_url: 'https://sepolia.drpc.org/',
        l1_system_config_contract: '0x3bdeD3f1AbC874ccb26ec5492384bfB07Fa33467',
        l1_batch_blockscout_blobs_api_url: 'https://eth-sepolia.blockscout.com/api/v2/blobs',
        l1_batch_blocks_chunk_size: '4',
        l2_batch_genesis_block_number: '0',
        l1_output_oracle_contract: '0x6Baf32dBb647d39e76C18c5E19912038c4AB360A',
        l1_deposits_batch_size: '500',
        l2_withdrawals_start_block: '1',
        l2_message_passer_contract: '0x4200000000000000000000000000000000000016'
      },
      arbitrum: null
    },
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
