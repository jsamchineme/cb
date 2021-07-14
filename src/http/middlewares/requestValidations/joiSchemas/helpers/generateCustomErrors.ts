export const clearDoubleQuotes = (inputField) => {
  return inputField.replace(/"/g, '');
};

const generateCustomErrors = (errors, httpException) => {
  /**
   * the message comes in this format
   * USR_10|422|The email field is less than 10 in character length
   * This is parsed to retreive the errorCode, statusCode and errorMessage
   */
  const message = errors[0].message;
  const parsedMessageArray = message.split('|');

  const ERROR_CODE = {
    code: parsedMessageArray[0],
    status: Number(parsedMessageArray[1]),
    message: parsedMessageArray[2],
  };
  return httpException.handle(ERROR_CODE);
};

export default generateCustomErrors;
