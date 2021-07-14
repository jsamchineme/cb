import * as jwt from 'jsonwebtoken';
import httpException from 'src/http/httpException';
import User from 'src/modules/user/model';
import { JWT_SECRET } from 'src/constants';
import { ERROR_CODES } from 'src/constants/response';

const stripTokenBearerString = (tokenString) => {
  const splitArray = tokenString.split(' ');
  const token = splitArray.length > 1 ? splitArray[splitArray.length - 1] : splitArray[0];
  return token;
};

/**
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @param {Function} next - handle to the next middleware
 * @return {void}
 */
const verifyToken = (req, res, next) => {
  let token = req.headers.authorization;

  if (token) {
    token = stripTokenBearerString(token);

    jwt.verify(token, JWT_SECRET, async (err, decoded) => {
      if (err) {
        return next(httpException.handle(ERROR_CODES.AUTH_01));
      }

      const user = await User.findByPk(decoded.id);
      if (!user) {
        return next(httpException.handle(ERROR_CODES.AUTH_01));
      }
      req.decoded = decoded;
      next();
    });
  } else {
    throw httpException.handle(ERROR_CODES.AUTH_01);
  }
};

export default verifyToken;
