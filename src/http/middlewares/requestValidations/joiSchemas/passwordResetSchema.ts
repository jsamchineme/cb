import * as Joi from '@hapi/joi';
import {
  resetCode,
  password,
  confirmPassword
} from './validationFields/resetCode';


const schema = Joi.object({
  resetCode,
  password,
  confirmPassword,
});


export default schema;
