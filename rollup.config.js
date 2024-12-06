import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'

const __dirname = dirname(fileURLToPath(import.meta.url))
const absolute = path => resolve(__dirname, path)

export default ()=>{
  return [
    {
      input: 'lib/core/index.ts',
      output:{
        file:absolute('dist/index.ts')
      },
      plugins:[
        typescript(),
        dts()
      ]
    },
    {
      input: 'lib/router/index.ts',
      output:{
        file:absolute('dist/router/index.ts')
      },
      plugins:[
        typescript(),
        dts()
      ]
    },
    {
      input: 'lib/store/index.ts',
      output:{
        file:absolute('dist/store/index.ts')
      },
      plugins:[
        typescript(),
        dts()
      ]
    },

  ]
}
