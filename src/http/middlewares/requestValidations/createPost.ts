import httpException from 'src/http/httpException';
import createPostSchema from './joiSchemas/createPostSchema';
import generateCustomErrors from './joiSchemas/helpers/generateCustomErrors';

/**
 * @param  {Object} req - the request object
 * @param  {Object} res - the response object
 * @param  {Function} next - switch to the next route middleware
 * @return {*} - returns void or next()
 */
const validateCreatePost = async (req, res, next) => {
  try {
    await createPostSchema.validate(req.body);
    next();
  } catch (errors) {
    return next(generateCustomErrors(errors, httpException));
  }
};

export default validateCreatePost;
