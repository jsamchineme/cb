import * as jwt from 'jsonwebtoken';
import { TOKEN_EXPIRTY_TIME, JWT_SECRET } from 'src/constants';

const generateToken = (user) => {
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      date: Date.now()
    },
    JWT_SECRET,
    { expiresIn: TOKEN_EXPIRTY_TIME }
  );

  return {
    token,
    expiresIn: TOKEN_EXPIRTY_TIME
  };
};

export default generateToken;