// const path = require('path')

// module.exports = {
//     webpack: (config, { defaultLoaders }) => {
//         console.log("PATH=>", path.join(__dirname, '../..', 'node_modules', 'react-native-web'))
//         config.resolve = {
//             ...config.resolve,
//             alias: {
//                 ...config.resolve.alias,
//                 'react-native': path.join(__dirname, '../..', 'node_modules', 'react-native-web'),
//             },
//             modules: [
//                 ...config.resolve.modules,
//                 path.resolve(__dirname, '../..', 'node_modules'),
//             ],
//             symlinks: false
//         }

//         config.module.rules.push({
//             test: /\.+(js|jsx)$/,
//             use: defaultLoaders.babel,
//             include: [path.resolve(__dirname, '../..', 'node_modules', '@ui-kitten/components')]
//         })

//         return config
//     },
// }

const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['@ui-kitten/components', 'react-native-svg', '@ui-kitten/eva-icons', 'react-native', '@monorepo/common']);

module.exports = withPlugins([withTM], {
    webpack: config => {
        config.resolve.alias = {
            ...(config.resolve.alias || {}),
            // Transform all direct `react-native` imports to `react-native-web`
            'react-native$': 'react-native-web',
        }
        config.resolve.extensions = [
            '.web.js',
            '.web.ts',
            '.web.tsx',
            ...config.resolve.extensions,
        ]
        //config.externals = [...config.externals, { 'react-native': 'react-native' }];
        //config.plugins.push(new webpack.IgnorePlugin(/node_modules\/react-native/))

        return config
    },
});