import * as bcrypt from 'bcryptjs';
import { SALT_ROUNDS } from 'src/constants';

const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(Number(SALT_ROUNDS));
  return bcrypt.hashSync(password, salt);
};

export default hashPassword;
