import httpException from 'src/http/httpException';
import userLoginSchema from './joiSchemas/userLoginSchema';
import generateCustomErrors from './joiSchemas/helpers/generateCustomErrors';

/**
 * @param  {Object} req - the request object
 * @param  {Object} res - the response object
 * @param  {Function} next - switch to the next route middleware
 * @return {*} - returns void or next()
 */
const validateUserLogin = async (req, res, next) => {
  try {
    await userLoginSchema.validate(req.body);
    next();
  } catch (errors) {
    return next(generateCustomErrors(errors, httpException));
  }
};

export default validateUserLogin;
