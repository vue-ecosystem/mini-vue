const objectToString = Object.prototype.toString

export const toRawType = (val:unknown) => objectToString.call(val).slice(8, -1)

export const isArray = Array.isArray
export const isFunction = (val:unknown) => typeof val === 'function'
export const isString = (val:unknown) => typeof val === 'string'
export const isSymbol = (val:unknown) => typeof val === 'symbol'

export const isObject = (val:unknown) => val !== null && typeof val === 'object'

export const isIntegerKey = (key:unknown) => 
  isString(key) && 
  key !== 'NaN' && 
  key[0] !== '-' && 
  `${parseInt(key, 10)}` === key

export const isMap = (val:unknown) => objectToString.call(val) === '[object Map]'
export const isSet = (val:unknown) => objectToString.call(val) === '[object Set]'
export const isPlainObject = (val:unknown) => objectToString.call(val) === '[object Object]'
