import * as Joi from '@hapi/joi';
import loadErrors from '../helpers/loadErrors';
import { ModelName } from 'src/types';

export const content = Joi.string().strict().trim().strict()
  .min(6)
  .max(500)
  .required()
  .error((errors) => {
    throw loadErrors(ModelName.POST, errors);
  });