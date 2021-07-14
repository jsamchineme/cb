import { promisify } from 'util';
import client from 'src/config/redis';
import logger from 'src/utils/logger';

const setAsync = promisify(client.set).bind(client);
const getAsync = promisify(client.get).bind(client);
const keysAsync = promisify(client.keys).bind(client);

const redisService = {
  async store(key, data) {
    if (!data) {
      // console.log('data missing', data);
      return;
    }
    if (data.toJSON !== undefined) {
      data = data.toJSON(); // handle sequelize objects
    }
    await setAsync(key, JSON.stringify(data));
    logger.info(`redis cache set for key:${key}`);
  },

  async retrieve(key) {
    const data = await getAsync(key);
    return JSON.parse(data);
  },

  async keys(searchPattern) {
    const keys = await keysAsync(searchPattern);
    return keys;
  }
}

export default redisService;