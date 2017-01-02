import nodeResolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/main.js',
  format: 'iife',
  dest: 'bundle.js',
  sourceMap: true,
  plugins: [
    nodeResolve({
      jsnext: true,
      main: true
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    uglify()
  ]
};
