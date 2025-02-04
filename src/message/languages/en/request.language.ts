// $value
// $property
export default {
    default: 'Validation errors',
    min: '$property has less elements than the minimum allowed.',
    max: '$property has more elements than the maximum allowed.',
    maxLength: '$property has more elements than the maximum allowed.',
    minLength: '$property has less elements than the minimum allowed.',
    isString: '$property should be a type of string.',
    isNotEmpty: '$property cannot be empty.',
    isLowercase: '$property should be lowercase.',
    isOptional: '$property is optional.',
    isPositive: '$property should be a positive number.',
    isEmail: '$property should be a type of email.',
    isInt: '$property should be a number.',
    isNumberString: '$property should be a number.',
    isNumber: '$property should be a number $value.',
    isMongoId: '$property should reference with mongo object id.',
    isBoolean: '$property should be a boolean',
    isStartWith: '$property should start with $value',
    isEnum: "$property don't match with enum",
    isObject: '$property should be a object',
    isArray: '$property should be a array',
    arrayNotEmpty: '$property array is not empty',
    minDate: '$property has less date than the minimum allowed.',
    maxDate: '$property has  more elements than the maximum allowed.',
    isDate: '$property should be a date',
    minDateGreaterThan: '$property has less date than the $value',
    isPasswordStrong: '$property must have strong pattern',
    isPasswordMedium: '$property must have medium pattern',
    isPasswordWeak: '$property must have weak pattern',
};
