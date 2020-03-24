const devConfig = '../config/sqlConfigDev';
const prodConfig = '../config/sqlConfigProd';
const testConfig = '../config/sqlConfigTest.js'
let config = null;
if(process.env.NODE_ENV === 'development'){
  console.log(`>>>>>> loading ${devConfig}......`)
  config = require(devConfig)
} else if(process.env.NODE_ENV === 'test'){
  console.log(`>>>>>> loading ${testConfig}......`);
  config = require(testConfig)
} else if(process.env.NODE_ENV === 'production'){
  console.log(`>>>>>> loading ${prodConfig}......`);
  config = require(prodConfig)
} else {
  console.log(`>>>>>> This mode is ${process.env.NODE_ENV} please add config`)
}

module.exports = config