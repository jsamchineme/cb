import {
  DB_HOST,
  DB_USER,
  DB_PASS,
  DB_PORT,
  DB_NAME,
  TEST_DB_USER,
  TEST_DB_PASS,
  TEST_DB_NAME,
  TEST_DB_HOST,
  TEST_DB_PORT,
} from 'src/constants';

module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres',
  },
  test: {
    username: TEST_DB_USER,
    password: TEST_DB_PASS,
    database: TEST_DB_NAME,
    host: TEST_DB_HOST,
    port: TEST_DB_PORT,
    dialect: 'postgres',
  },
  production: {
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres',
    dialectOptions: {
      ssl: true
    }
  },
};
