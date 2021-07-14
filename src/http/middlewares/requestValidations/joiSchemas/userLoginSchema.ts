import * as Joi from '@hapi/joi';
import {
  email,
  password,
} from './validationFields/user';


const schema = Joi.object({
  email,
  password,
});


export default schema;
