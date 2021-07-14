import { Sequelize } from 'sequelize';
import * as config from './config';
import { NODE_ENV } from 'src/constants';
import { EnvironmentName } from 'src/types';

// set default environment to development
const environment = NODE_ENV || EnvironmentName.DEVELOPMENT;

const sequelizeDatabaseConfig = config[environment];
const { database, username, password } = sequelizeDatabaseConfig;

// setup sequelize to log queries in development environment only
sequelizeDatabaseConfig.logging = NODE_ENV === EnvironmentName.DEVELOPMENT;

export default new Sequelize(database, username, password, sequelizeDatabaseConfig);
