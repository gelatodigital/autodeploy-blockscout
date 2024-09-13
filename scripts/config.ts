type config = {
  name: "string";
  config: {
    rpc_url: "string";
    server_size: "string";
    chain_type: "UNSPECIFIED_CHAIN_TYPE";
    node_type: "UNSPECIFIED_NODE_TYPE";
    chain_id: "string";
    token_symbol: "string";
    custom_domain: "string";
    logo_url: "string";
    logo_url_dark: "string";
    chain_name: "string";
    icon_url: "string";
    icon_url_dark: "string";
    homeplate_background: "string";
    homeplate_text_color: "string";
    is_testnet: true;
    stats_enabled: true;
    rpc_ws_url: "string";
    public_rpc_url: "string";
    wallet_connect_project_id: "string";
    eip_1559_elasticity: 0;
    navigation_layout: "UNSPECIFIED_NAVIGATION_LAYOUT";
    favicon_url: "string";
    og_image_url: "string";
    color_theme: "UNSPECIFIED_COLOR_THEME";
    identicon: "UNSPECIFIED_IDENTICON";
    chain_spec: "string";
    footer: {
      columns: [
        {
          title: "string";
          links: [
            {
              text: "string";
              url: "string";
            },
          ];
        },
      ];
    };
    optimism: {
      l1_rpc_url: "string";
      l1_system_config_contract: "string";
      l1_batch_blockscout_blobs_api_url: "string";
      l1_batch_celestia_blobs_api_url: "string";
      l1_batch_blocks_chunk_size: "string";
      l2_batch_genesis_block_number: "string";
      l1_output_oracle_contract: "string";
      l1_deposits_batch_size: "string";
      l2_withdrawals_start_block: "string";
      l2_message_passer_contract: "string";
      l1_blockscout_url: "string";
      l2_withdrawal_url: "string";
      l2_fault_proof_enabled: true;
      has_mud_framework: true;
    };
    arbitrum: {
      arbsys_contract: "string";
      node_interface_contract: "string";
      l1_rpc_url: "string";
      l1_rpc_chunk_size: "string";
      l1_rpc_historical_blocks_range: "string";
      l1_rollup_contract: "string";
      l1_rollup_init_block: "string";
      l1_common_start_block: "string";
      l1_finalization_threshold: "string";
      rollup_chunk_size: "string";
      bridge_messages_tracking_enabled: true;
      missed_messages_recheck_interval: "string";
      missed_messages_blocks_depth: "string";
      tracking_messages_on_l1_recheck_interval: "string";
      batches_tracking_enabled: true;
      batches_tracking_recheck_interval: "string";
      batches_tracking_l1_finalization_check_enabled: true;
      batches_tracking_messages_to_blocks_shift: "string";
      missing_batches_range: "string";
      confirmations_tracking_finalized: true;
      new_batches_limit: "string";
      l1_blockscout_url: "string";
    };
  };
};

const minimalConfig = {
  name: "everclear",
  config: {
    rpc_url: "https://rpc.everclear.raas.gelato.cloud",
    server_size: "small",
    chain_type: "ARBITRUM",
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

// For one Click, use following logos for dark/white mode

const geltoLogos = {
    icon_url: "https://firebasestorage.googleapis.com/v0/b/explorer-assets.appspot.com/o/assets%2Fgelato%2Ficon.png?alt=media&token=dafe95bf-fb01-4cd6-bcb3-564e9b821277",
    icon_url_dark: "https://firebasestorage.googleapis.com/v0/b/explorer-assets.appspot.com/o/assets%2Fgelato%2Ficon.png?alt=media&token=dafe95bf-fb01-4cd6-bcb3-564e9b821277",
    logo_url: "https://firebasestorage.googleapis.com/v0/b/explorer-assets.appspot.com/o/assets%2Fgelato%2FGelato_Light_background.png?alt=media&token=7cd2b533-c048-4032-9c41-b5ca666cd2c5";
    logo_url_dark: "https://firebasestorage.googleapis.com/v0/b/explorer-assets.appspot.com/o/assets%2Fgelato%2FGelato_Dark_background.png?alt=media&token=0cb3b047-39c0-4d6c-904a-0b5f49e7afc8"
}