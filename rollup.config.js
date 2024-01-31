import nodeResolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";

export default {
    input: 'src/t-writer.js',
    output: {
        file: 'dist/t-writer.js',
        format: 'es'
    },
    plugins: [
        nodeResolve(),
        babel({
            exclude: 'node_modules/**',
            babelHelpers: 'bundled'
        })
    ]
}