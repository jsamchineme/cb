import * as Joi from '@hapi/joi';
import loadErrors from '../helpers/loadErrors';
import { ModelName } from 'src/types';

export const email = Joi.string().strict().trim().strict()
  .min(3)
  .max(70)
  .email()
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

export const first_name = Joi.string().trim().min(1).max(30)
  .required()
  .error((errors) => {
    throw loadErrors(ModelName.USER, errors);
  });

export const last_name = Joi.string().trim().min(1).max(30)
  .required()
  .error((errors) => {
    throw loadErrors(ModelName.USER, errors);
  });