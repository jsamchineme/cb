import { ModelName, ValidationErrorType, ErrorTypeCode, ErrorTypeCodeMap } from 'src/types';

const modelCodePrefixes = {
  [ModelName.USER]: 'USR',
  [ModelName.POST]: 'POST',
};

const ErrorTypeCodes: ErrorTypeCodeMap = {
  [ValidationErrorType.EMPTY]: ErrorTypeCode._01,
  [ValidationErrorType.REQUIRED]: ErrorTypeCode._02,
  [ValidationErrorType.EMAIL]: ErrorTypeCode._03,
  [ValidationErrorType.MAX]: ErrorTypeCode._04,
  [ValidationErrorType.MIN]: ErrorTypeCode._05,
  [ValidationErrorType.UNKNOWN]: ErrorTypeCode._06,
}

const loadErrors = (modelName: ModelName, errors) => {
  const { code: type, local } : { code: ValidationErrorType, local: any} = errors[0];
  const { key: field } = local;

  let message;
  const status = 422;
  const errorCode = `${modelCodePrefixes[modelName]}_${ErrorTypeCodes[type]}`;

  switch (type) {
    case 'any.required':
      message = `The ${field} field is required`;
      break;
    case 'string.email':
      message = `The ${field} field is invalid`;
      break;
    case 'string.empty':
      message = `The ${field} field is empty`;
      break;
    case 'string.min':
      message = `The ${field} field is less than ${local.limit} in character length`;
      break;
    case 'any.unknown':
      message = `The ${field} field is not allowed`;
      break;
    case 'string.max':
      message = `The ${field} field is longer than ${local.limit} in character length`;
      break;
    default:
      message = 'failed validation';
  }

  errors[0].message = `${errorCode}|${status}|${message}`;

  return errors;
};
export default loadErrors;
