import httpException from 'src/http/httpException';
import passwordResetSchema from './joiSchemas/passwordResetSchema';
import generateCustomErrors from './joiSchemas/helpers/generateCustomErrors';
import { ERROR_CODES } from 'src/constants/response';


/**
 * @param  {Object} req - the request object
 * @param  {Object} res - the response object
 * @param  {Function} next - switch to the next route middleware
 * @return {*} - returns void or next()
 */
const validatePasswordReset = async (req, res, next) => {
  try {
    await passwordResetSchema.validate(req.body);

    if (req.body.password !== req.body.confirmPassword) {
      return next(httpException.handle(ERROR_CODES.USR_08));
    }
    next();
  } catch (errors) {
    return next(generateCustomErrors(errors, httpException));
  }
};

export default validatePasswordReset;
