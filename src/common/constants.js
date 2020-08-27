module.exports = {
  header_key: 'my key header',
  /*
  |--------------------------------------------------------------------------
  | Log Channels
  |--------------------------------------------------------------------------
  | Available Drivers: "single", "daily", "console"
  */
  LOG_CHANNEL: process.env.LOG_DRIVER ? process.env.LOG_DRIVER : 'single'
};
