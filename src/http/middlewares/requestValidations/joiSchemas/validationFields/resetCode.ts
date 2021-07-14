import * as Joi from '@hapi/joi';
import loadErrors from '../helpers/loadErrors';
import { ModelName } from 'src/types';

export const resetCode = Joi.string().strict().trim().strict()
  .min(6)
  .max(6)
  .required()
  .error((errors) => {
    throw loadErrors(ModelName.USER, errors);
  });

export const password = Joi.string().trim().strict()
  .max(40)
  .required()
  .error((errors) => {
    throw loadErrors(ModelName.USER, errors);
  });

export const confirmPassword = Joi.string().trim().strict()
  .max(40)
  .required()
  .error((errors) => {
    throw loadErrors(ModelName.USER, errors);
  });