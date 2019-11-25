import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel';
import minify from 'rollup-plugin-babel-minify';

import { chromeExtension } from 'rollup-plugin-chrome-extension'

export default {
  input: 'src/manifest.json',

  output: {
    dir: 'dist',
    format: 'esm',
  },

  // always put chromeExtension() before other plugins
  plugins: [
      babel({
          externalHelpers: false,
          runtimeHelpers: true,
          sourceMap: true,
          exclude: "node_modules/**",
          extensions: ['.js']
      }),

      chromeExtension(),
      resolve(),
      commonjs(),

      minify({
          sourceMap: false,
          comments: false
      })
  ],
}

