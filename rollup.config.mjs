import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import sass from 'rollup-plugin-sass'

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: 'dist/bundle.esm.js',
      format: 'esm', 
      sourcemap: true,
    },
    {
      file: 'dist/bundle.js',
      format: 'cjs',
      sourcemap: true,
      name: 'react-lib',
    },
  ],
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
    }),
    resolve({
      extensions: ['.tsx', '.ts'],
    }),
    external(),
    postcss({ extensions: [".css"], inject: true, extract: false }),
    sass({
      outputStyle: 'compressed',
      includePaths: ['node_modules'],
    }),
  ],
}
