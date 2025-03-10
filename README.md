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

### @vue/shared

```mermaid
flowchart LR
  shared@{ shape: docs, label: "@vue/shared"} --> makeMap@{ shape: doc, label:"makeMap" }
  shared --> general@{ shape: doc, label:"general" }
  shared --> patchFlags@{ shape: doc, label:"patchFlags" }
  shared --> shapeFlags@{ shape: doc, label:"shapeFlags" }
  shared --> slotFlags@{ shape: doc, label:"slotFlags" }
  shared --> globalsAllowList@{ shape: doc, label:"globalsAllowList" }
  shared --> codeframe@{ shape: doc, label:"codeframe" }
  shared --> normalizeProp@{ shape: doc, label:"normalizeProp" }
  shared --> domTagConfig@{ shape: doc, label:"domTagConfig" }
  shared --> domAttrConfig@{ shape: doc, label:"domAttrConfig" }
  shared --> escapeHtml@{ shape: doc, label:"escapeHtml" }
  shared --> looseEqual@{ shape: doc, label:"looseEqual" }
  shared --> toDisplayString@{ shape: doc, label:"toDisplayString" }
  shared --> typeUtils@{ shape: doc, label:"typeUtils" }

  general --> makeMap
  globalsAllowList --> makeMap
  normalizeProp --> general
  domTagConfig --> makeMap
  domAttrConfig --> makeMap
  looseEqual --> general
  toDisplayString --> reactivity["@vue/reactivity"]
  toDisplayString --> general
  
```

### @vue/reactivity

```mermaid
flowchart LR
  reactivity@{ shape: docs, label: "@vue/reactivity"} --> ref@{ shape: doc, label:"ref" }
  reactivity --> reactive@{ shape: doc, label:"reactive" }
  reactivity --> computed@{ shape: doc, label:"computed" }
  reactivity --> effect@{ shape: doc, label:"effect" }
  reactivity --> dep@{ shape: doc, label:"dep" }
  reactivity --> effectScope@{ shape: doc, label:"effectScope" }
  reactivity --> arrayInstrumentations@{ shape: doc, label:"arrayInstrumentations" }
  reactivity --> constants@{ shape: doc, label:"constants" }
  reactivity --> watch@{ shape: doc, label:"watch" }

  ref --> shared["@vue/shared"]
  ref --> dep
  ref --> reactive
  ref --> computed
  ref --> constants
  ref --> warn([warning])

  reactive --> shared
  reactive --> ref
  reactive --> constants
  reactive --> bh([baseHandlers])
  reactive --> ch([collectionHandlers])
  reactive --> warn

  computed --> shared
  computed --> effect
  computed --> ref
  computed --> warn
  computed --> dep
  computed --> constants

  effect --> shared
  effect --> computed
  effect --> constants
  effect --> dep
  effect --> effectScope
  effect --> warn

  dep --> shared
  dep --> computed
  dep --> constants
  dep --> effect

  effectScope --> effect
  effectScope --> warn

  arrayInstrumentations --> constants
  arrayInstrumentations --> effect
  arrayInstrumentations --> reactive
  arrayInstrumentations --> dep
  arrayInstrumentations --> shared

  watch --> shared
  watch --> warn
  watch --> computed
  watch --> constants
  watch --> effect
  watch --> reactive
  watch --> ref
  watch --> effectScope
  
```

### @vue/compiler-core

```mermaid
flowchart LR
  compiler-core@{ shape: docs, label: "@vue/compiler-core"} --> compile@{ shape: doc, label:"compile" }
  compiler-core --> options@{ shape: doc, label:"options" }
  compiler-core --> parser@{ shape: doc, label:"parser" }
  compiler-core --> transform@{shape: doc, label:"transform"}
  compiler-core --> codegen@{shape: doc, label:"codegen"}
  compiler-core --> errors@{shape: doc, label:"errors"}
  compiler-core --> ast@{shape: doc, label:"ast"}
  compiler-core --> utils@{shape: doc, label:"utils"}
  compiler-core --> babelUtils@{shape: doc, label:"babelUtils"}
  compiler-core --> runtimeHelpers@{shape: doc, label:"runtimeHelpers"}
  compiler-core --> transforms@{shape: doc, label:"transforms"}
  compiler-core --> compat@{shape: doc, label:"compat"}
  compiler-core --> shared["@vue/shared"]

  compile --> parser
  compile --> transform
  compile --> codegen
  compile --> shared
  compile --> transforms
  compile --> compat
  compile --> errors

  options --> ast
  options --> errors
  options --> transform
  options --> compat

  parser --> ast
  parser --> options
  parser --> tokenizer([tokenizer])
  parser --> compat
  parser --> shared
  parser --> errors
  parser --> utils

  transform --> options
  transform --> ast
  transform --> shared
  transform --> errors
  transform --> runtimeHelpers
  transform --> utils
  transform --> transforms
  transform --> compat

  codegen --> options
  codegen --> ast
  codegen --> utils
  codegen --> shared
  codegen --> runtimeHelpers
  codegen --> transform

  errors --> ast

  ast --> shared
  ast --> runtimeHelpers
  ast --> transforms
  ast --> transform

  utils --> ast
  utils --> transform
  utils --> runtimeHelpers
  utils --> shared
  utils --> transforms
  utils --> babelUtils

```


## Usage


## License
