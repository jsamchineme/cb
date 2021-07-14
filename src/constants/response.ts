export const TOKEN_EXPIRTY_TIME = '24h';

export const ERROR_CODES = {
  USR_07: {
    message: 'Account not found',
    status: 404,
    code: 'USR_07'
  },
  USR_08: {
    message: 'passwords do not match',
    status: 422,
    code: 'USR_08'
  },
  AUTH_01: {
    message: 'invalid token',
    status: 403,
    code: 'AUTH_01'
  },
  POST_01: {
    message: 'Internal Server Error',
    status: 500,
    code: 'POST_01'
  },
  GEN_O1: {
    message: 'Resource Not found',
    status: 404,
    code: 'GEN_01'
  },
  PCAT_01: {
    message: 'prayer categories not found',
    status: 404,
    code: 'PCAT_01'
  },
  DAT_01: {
    message: 'data not found',
    status: 404,
    code: 'DAT_01'
  },
  SVR_01: {
    message: 'Internal Server Error',
    status: 500,
    code: 'SVR_01'
  },
  RCO_01: {
    message: 'Code not found',
    status: 404,
    code: 'RCO_01'
  },
}