/**
 * Prepare the response for an http exception
 */
const httpException = {
  /**
   * @param {Object} error - object of http error
   * @param {Object} customMessage - object of http error
   * @returns {Object} - the error response object
   */
  handle(error, customMessage?) {
    const { status, message, code } = error;

    this.response = {
      status,
      code,
      message: customMessage || message,
    };

    return this;
  },
};

export default httpException;
