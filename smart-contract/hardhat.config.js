require("@nomiclabs/hardhat-waffle");
require('dotenv').config({path: '.env'})

const ALCHEMY_API_URL = process.env.ALCHEMY_API_URL
const POLYGON_PRIVATE_KEY = process.env.POLYGON_PRIVATE_KEY

module.exports = {
  solidity: '0.8.4',
  networks: {
    matic: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/_g11-TeFdVQO58t2alykJadgA2BZwbVY",
      accounts: [POLYGON_PRIVATE_KEY],
    },
  },
}
