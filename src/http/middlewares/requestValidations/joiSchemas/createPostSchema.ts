import * as Joi from '@hapi/joi';
import {
  content
} from './validationFields/post';

const schema = Joi.object({
  content,
});

export default schema;
