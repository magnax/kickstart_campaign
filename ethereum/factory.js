import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json'
import config from '../config/application.json'

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  config.contractAddress
);

export default instance;
