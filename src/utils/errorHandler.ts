import logger from 'src/utils/logger';
import { DEBUG, NODE_ENV } from 'src/constants';
import { ErrorResponse, EnvironmentName } from 'src/types';

/**
 * Intercept all errors and handle them
 * There are two types of errors handled here
 * Operational errors and Request(http) errors
 * Operational errors are errors thrown in the course of program execution
 * Request or http errors are the onces we throw to flag invalid requests
 *
 * @param {Object} err - error
 * @param {Object} req - request
 * @param {Object} res - response
 * @param {Function} next - handle to the next middleware
 * @returns {ServerResponse} - response with error code and message
 */
const errorHandler = (err, req, res, next) => {
  if (NODE_ENV === EnvironmentName.DEVELOPMENT) {
    logger.info(err.stack);
  }

  const { response: httpErrorResponse } = err;
  let operationalErrorResponse: ErrorResponse = {
    status: 500,
    message: 'Internal Server Error',
  };

  /**
   * Return specific error message and stack trace
   * if app is in debug mode
   */
  if (DEBUG) {
    operationalErrorResponse = {
      ...operationalErrorResponse,
      stack: err.stack,
      message: err.message,
    };
  }

  if (!err) {
    next();
  }
  const errorResponse = httpErrorResponse || operationalErrorResponse;
  return res.status(errorResponse.status).json(errorResponse);
};

export default errorHandler;
