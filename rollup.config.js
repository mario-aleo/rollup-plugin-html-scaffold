import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

const pkg = require('./package.json');

export default {
  input: 'src/index.js',
  output: [{ format: 'es', file: pkg.module }, { format: 'cjs', file: pkg.main }],
  external: ['fs', 'path'],
  plugins: [resolve(), commonjs()],
};
