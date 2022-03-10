require("@nomiclabs/hardhat-waffle");

/**
* @type import('hardhat/config').HardhatUserConfig
*/
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
const { ROPSTEN_API_URL, RINKEBY_API_URL, PRIVATE_KEY } = process.env;
module.exports = {
   solidity: "0.7.3",
   defaultNetwork: "ropsten",
   networks: {
      hardhat: {},
      ropsten: {
         url: ROPSTEN_API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      },
      rinkeby: {
         url: RINKEBY_API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      }
   },
}


