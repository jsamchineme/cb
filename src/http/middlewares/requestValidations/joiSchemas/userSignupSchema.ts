import * as Joi from '@hapi/joi';
import {
  email,
  password,
  first_name,
  last_name,
} from './validationFields/user';


const schema = Joi.object({
  email,
  password,
  first_name,
  last_name,
});


export default schema;
