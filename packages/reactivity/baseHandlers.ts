class BaseReactiveHandler implements ProxyHandler<object> {
  constructor(
    protected readonly _isReadonly=false, 
    protected readonly _isShallow=false
  ) {}

  get(target: object, p: string|symbol, receiver: object) {

  }
} 

class MutableReactiveHandler extends BaseReactiveHandler {
  constructor(isShallow=false) {
    super(false, isShallow)
  }
}

export const mutableHandlers = new MutableReactiveHandler() 
