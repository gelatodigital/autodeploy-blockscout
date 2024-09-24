
import * as dotenv from "dotenv";
import axios, { AxiosInstance } from "axios";
import { instance_id } from "./constants";



const  baseURL = `https://autoscout.services.blockscout.com/api/v1/instances/${instance_id}/config`;



const bodyEverclear= {
  "config": {
//   custom_domain:"parthenon.athenescan.io",
   //"is_testnet":true,
    //"wallet_connect_project_id":"8607e24969636dec0235a71e485d8ea9",
   // "public_rpc_url":"https://rpc.parthenon.athenescan.io/"
  // "rpc_url": "https://rpc.parthenon.athenescan.io/66a13f09ceab49998f954e7bb71c7c02",
   // "rpc_ws_url": "wss://ws.parthenon.athenescan.io/66a13f09ceab49998f954e7bb71c7c02",
   //"stats_enabled": true
   "meta_og": {
    "description": "Athene Network: AI-driven ecosystem launched in Oct 2023. Explore Parthenon, our public testnet."
}
  //  chain_type: 'OPTIMISM',
  //  eip_1559_elasticity: "10",
  //  optimism: {
  //   l1_rpc_url: 'https://sepolia.drpc.org/',
  //   l1_system_config_contract: '0xb845550504EdA0BcB251Fa1091d1a19C98BC32e8',
  //   l1_batch_blockscout_blobs_api_url:'https://eth-sepolia.blockscout.com/api/v2/blobs',
  //   l1_batch_celestia_blobs_api_url: null,
  //   l1_batch_blocks_chunk_size: '4',
  //   l2_batch_genesis_block_number: '0',
  //   l1_output_oracle_contract: '0x41ca6BcC5f688754EDB5Ba994365B4e03385A2c8',
  //   l1_deposits_batch_size: '500',
  //   l2_withdrawals_start_block: '0',
  //   l2_message_passer_contract: '0x4200000000000000000000000000000000000016',
  //   l1_blockscout_url: 'https://eth-sepolia.blockscout.com/',
  //   l2_withdrawal_url: 'https://bridge.parthenon.athenescan.io/bridge/athene-parthenon',
  //   l2_fault_proof_enabled: false,
  //   has_mud_framework: false
  // },
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
