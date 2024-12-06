import { ReactiveFlags } from './constants'
import { toReactive } from './reactive'

class RefImpl<T> {
  _value: T
  public readonly [ReactiveFlags.IS_REF] = true

  constructor(rawValue:T, isShallow:boolean) {
    
  }

  get value() {
    return this._value
  }

  set value(newValue:T) {

  }
}

function createRef<T>(rawValue:T, shallow:boolean) {
  if(isRef(rawValue)) return rawValue
  return new RefImpl(rawValue, shallow)
}

export function ref<T>(value:T) {
  return createRef(value, false)
}

export function shallowRef(value:unknown) {
  return createRef(value, true)
}

export function isRef<T>(r:unknown): r is RefImpl<T> {
  return r ? r[ReactiveFlags.IS_REF] === true : false
}

export function toRef() {}
export function toValue() {}
export function toRefs() {}
export function unRef() {}
export function customRef() {}
export function triggerRef() {}
export function proxyRefs() {}
