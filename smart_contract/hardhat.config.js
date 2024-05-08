//https://eth-sepolia.g.alchemy.com/v2/ITjxHgVO6WZRF3y38_gzuzWJQ3UuKr5H

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity : '0.8.0',
  networks:{
    Sepolia:{
    url:'https://eth-sepolia.g.alchemy.com/v2/ITjxHgVO6WZRF3y38_gzuzWJQ3UuKr5H',
    accounts:['b7a47ca10b58cac63c833e605bde72362afab6629359978bb42ddbbb65526828']
  }
    
  }
}