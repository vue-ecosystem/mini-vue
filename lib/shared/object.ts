const hasOwnProperty = Object.prototype.hasOwnProperty

export const EMPTY_OBJ = Object.freeze({})

export const hasChanged = (value:unknown, oldValue:unknown) => !Object.is(value, oldValue)

export const def = (obj:object, key:string|symbol, value:unknown, writable=false) => {
  Object.defineProperty(obj, key, {
    value,
    writable,
    configurable:true,
    enumerable:false
  })
}

export const hasOwn = (val:object, key:string|symbol) => hasOwnProperty.call(val, key)
export const extend = Object.assign
