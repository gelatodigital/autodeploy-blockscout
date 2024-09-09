
import * as dotenv from "dotenv";
import axios, { AxiosInstance } from "axios";
import { instance_id } from "./constants";



const  baseURL = `https://autoscout.services.blockscout.com/api/v1/instances/${instance_id}/config`;



const bodyEverclear= {
  "config": {
    is_testnet:false,
    logo_url: 'https://eth-sepolia.blockscout.com/assets/network_logo.png',
    icon_url: 'https://eth-sepolia.blockscout.com/assets/network_icon.png',

  //  "arbitrum": {
  //         "arbsys_contract": "0x0000000000000000000000000000000000000064",
  //         "node_interface_contract": "0x00000000000000000000000000000000000000C8",
  //         "l1_rpc_url": "https://rpc.ankr.com/eth",
  //         "l1_rpc_chunk_size": "20",
  //         "l1_rpc_historical_blocks_range": "1000",
  //         "l1_rollup_contract": "0xc6CAd31D83E33Fc8fBc855f36ef9Cb2fCE070f5C",
  //         "l1_rollup_init_block": "20684364",
  //         "l1_finalization_threshold": "1000",
  //         "rollup_chunk_size": "20",
  //         "bridge_messages_tracking_enabled": true,
  //         "missed_messages_recheck_interval": "3600",
  //         "missed_messages_blocks_depth": "10000",
  //         "tracking_messages_on_l1_recheck_interval": "20",
  //         "batches_tracking_enabled": true,
  //         "batches_tracking_recheck_interval": "20",
  //         "batches_tracking_l1_finalization_check_enabled": true,
  //         "batches_tracking_messages_to_blocks_shift": "0",
  //         "missing_batches_range": "10000",
  //         "confirmations_tracking_finalized": true,
  //         "new_batches_limit": "10"
  //       },
  //   "NEXT_PUBLIC_ROLLUP_L1_BASE_URL":"https://eth.blockscout.com/",
  //   "NEXT_PUBLIC_ROLLUP_L2_WITHDRAWAL_URL":"https://bridge.gelato.network/bridge/everclear-mainnet"
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
