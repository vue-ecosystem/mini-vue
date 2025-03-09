# mini-vue [![github](https://img.shields.io/badge/-English-gray)](./README.md)&nbsp;[![github](https://img.shields.io/badge/-Chinese-gray)](./README.zh-CN.md)

## Why

## Functions

### Reactivity

- [ ] [reactive]()
- [ ] [ref]()
- [ ] [readonly]()
- [ ] [computed]()
- [ ] [track dependency collection]()
- [ ] [trigger dependency]()
- [ ] [isReactive]()
- [ ] [nested reactive]()
- [ ] [toRaw]()
- [ ] [isReadonly]()

### Compiler-core


### Compiler-dom


### Runtime-core

### Runtime-dom

## FlowChart

Vue3 overall architecture design:

```mermaid
flowchart LR
  subgraph Vue
  vue --> shared["`@vue/**shared**`"]
  vue --> compiler-dom["`@vue/**compiler-dom**`"]
  vue --> runtime-dom["`@vue/**runtime-dom**`"]
  vue --> compiler-sfc["`@vue/**compiler-sfc**`"]
  vue --> server-renderer["`@vue/**server-renderer**`"]
  end
  subgraph Compiler-core
  compiler-core["`@vue/**compiler-core**`"] --> shared["`@vue/**shared**`"]
  end

  compiler-dom["`@vue/**compiler-dom**`"] --> shared["`@vue/**shared**`"]
  compiler-dom["`@vue/**compiler-dom**`"] --> compiler-core["`@vue/**compiler-core**`"]
  
  subgraph Compiler-sfc
  compiler-sfc["`@vue/**compiler-sfc**`"] --> shared["`@vue/**shared**`"]
  compiler-sfc["`@vue/**compiler-sfc**`"] --> compiler-core["`@vue/**compiler-core**`"]
  compiler-sfc["`@vue/**compiler-sfc**`"] --> compiler-dom["`@vue/**compiler-dom**`"]
  compiler-sfc["`@vue/**compiler-sfc**`"] --> compiler-ssr["`@vue/**compiler-ssr**`"]
  end
  
  compiler-ssr["`@vue/**compiler-ssr**`"] --> shared["`@vue/**shared**`"]
  compiler-ssr["`@vue/**compiler-ssr**`"] --> compiler-dom["`@vue/**compiler-dom**`"]
  
  subgraph Reactivity
  reactivity["`@vue/**reactivity**`"] --> shared["`@vue/**shared**`"]
  end
  subgraph Runtime-core
  runtime-core["`@vue/**runtime-core**`"] --> shared["`@vue/**shared**`"]
  runtime-core["`@vue/**runtime-core**`"] --> reactivity["`@vue/**reactivity**`"]
  end

  runtime-dom["`@vue/**runtime-dom**`"] --> shared["`@vue/**shared**`"]
  runtime-dom["`@vue/**runtime-dom**`"] --> reactivity["`@vue/**reactivity**`"]
  runtime-dom["`@vue/**runtime-dom**`"] --> runtime-core["`@vue/**runtime-core**`"]

  subgraph Runtime-test
  runtime-test["`@vue/**runtime-test**`"] --> shared["`@vue/**shared**`"]
  runtime-test["`@vue/**runtime-test**`"] --> runtime-core["`@vue/**runtime-core**`"]
  end

  server-renderer["`@vue/**server-renderer**`"] --> shared["`@vue/**shared**`"]
  server-renderer["`@vue/**server-renderer**`"] --> compiler-ssr["`@vue/**compiler-ssr**`"]


```





## Usage


## License
