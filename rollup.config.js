import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { readdirSync } from 'node:fs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'

const __dirname = dirname(fileURLToPath(import.meta.url))
const absolute = (...paths) => resolve(__dirname, ...paths)

const modules = readdirSync('lib').filter(name=>name!=='shared')

export default ()=>{
  return [
    ...modules.map(moduleName=>{
      return {
        input: `lib/${moduleName}/index.ts`,
        output:{
          file:absolute('dist', moduleName === 'core' ? '' : moduleName, 'index.ts'),
          sourcemap:true
        },
        plugins:[
          typescript()
        ]
      }
    }),
    ...modules.map(moduleName=>{
      return {
        input: `lib/${moduleName}/index.ts`,
        output:{
          file:absolute('dist', moduleName === 'core' ? '' : moduleName, 'index.d.ts')
        },
        plugins:[
          dts()
        ]
      }
    })
  ]
}
