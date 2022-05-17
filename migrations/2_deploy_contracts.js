// const Multicall = artifacts.require("Multicall");
// const DipoleFactory = artifacts.require("DipoleFactory");
// const WLAT = artifacts.require("WLAT");
const DipoleRouter = artifacts.require("DipoleRouter");
// const DipoleERC20 = artifacts.require("DipoleERC20");

const CombinedSwapAddRemoveLiquidity = artifacts.require('CombinedSwapAddRemoveLiquidity')

const feeToSetter='0x324b790ABbC496fFba372d7FBe6FA6eE68c5c675'; //有权更改 feeTo 地址的账户,为当前合约部署者

module.exports = async function(deployer) {
   // await deployer.deploy(DipoleFactory,feeToSetter);
   // console.log('DipoleFactory at:',DipoleFactory.address);

   // await  deployer.deploy(WLAT);
   // console.log('WLAT at:',WLAT.address);

   // const factotyAdrress = '0xA45c11798BC9d145a93b2D504C40C3969f89F450';
   // const wlatAddress = '0x6D366747AFF669c188aA3C3c9998828Fe8FfC471'
   // await  deployer.deploy(DipoleRouter, factotyAdrress, wlatAddress);
   // console.log('DipoleRouter at:',DipoleRouter.address);

//   await  deployer.deploy(DipoleERC20);
//   console.log('DipoleERC20 at:',DipoleERC20.address);

   // await deployer.deploy(Multicall);
   // console.log('Multicall  at:',Multicall.address);
      await deployer.deploy(CombinedSwapAddRemoveLiquidity,
         '0x2D0E60264F7f2ec3C59480e1E12181B70dC1821F',   // factory
         '0x244d8ab6a2c1eccb186bC72838b3778bcF7F11Ab',   // router
         '0xa71663bFa93Cd3DB7816fA65B156A0C652480a37')   // weth
};
