import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';

export default {
    input: ['src/index.js'],
    output: {
        file: 'public/index.js',
        format: 'es',
        sourcemap: true
    },
    plugins: [
        resolve(),
        json(),
        babel()
    ]
};