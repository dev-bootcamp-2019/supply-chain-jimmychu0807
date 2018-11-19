module.exports = {
  networks: {
    ganache_gui: {
      host: "localhost",
      port: 7545,
      network_id: "*" // Match any network id
    },
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    }
  }
};
