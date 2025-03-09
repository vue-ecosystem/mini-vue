import { isObject, toRawType } from '../shared'
import { ReactiveFlags, TargetType } from './constants'
import { mutableHandlers } from './baseHandlers'

const reactiveMap = new WeakMap()

const targetTypeMap = (rawType:string) => {
  switch(rawType) {
    case 'Object':
    case 'Array':
      return TargetType.COMMON
    case 'Map':
    case 'Set':
      return TargetType.COLLECTION
    default:
      return TargetType.INVALID
  }
}

const getTargetType = (value:object) => {
  return value[ReactiveFlags.SKIP] || !Object.isExtensible(value) 
    ? TargetType.INVALID
    : targetTypeMap(toRawType(value))
}

function createReactiveObject<T extends object>(
  target:T, 
  isReadonly:boolean,
  baseHandlers:ProxyHandler<T>,
  collectionHandlers:ProxyHandler<T>,
  proxyMap:WeakMap<T, unknown>
) {
  const existingProxy = proxyMap.get(target)

  if(existingProxy) return existingProxy

  const targetType = getTargetType(target)
  const handlers = targetType === TargetType.COLLECTION ? collectionHandlers : baseHandlers

  const proxy = new Proxy(target, handlers)
  proxyMap.set(target, proxy)

  return proxy
}


export function reactive<T extends object>(target:T) {
  if(isReadonly(target)) return target
  return createReactiveObject(target, false, mutableHandlers, null, reactiveMap)
}

export function readonly() {}
export function shallowReactive() {}
export function shallowReadonly() {}
export function isReactive() {}

export function isReadonly(value:unknown) {
  return !!(value && value[ReactiveFlags.IS_READONLY])
}

export function isShallow() {}
export function isProxy() {}
export function markRaw() {}
export function toRaw() {}
export function toReactive() {}

export function toReadonly() {

}
