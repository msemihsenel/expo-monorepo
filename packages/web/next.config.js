// @generated: @expo/next-adapter@2.1.61
// Learn more: https://github.com/expo/expo/blob/master/docs/pages/versions/unversioned/guides/using-nextjs.md#withexpo

const { withExpo } = require('@expo/next-adapter');

// module.exports = withExpo({
//     projectRoot: __dirname,
// });


//-----------------
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['@ui-kitten/components', 'react-native-svg', '@ui-kitten/eva-icons', 'react-native', '@monorepo/common', '@monorepo/kitten-configs']);

// module.exports = withPlugins([withTM], {
//     webpack: config => {
//         config.resolve.alias = {
//             ...(config.resolve.alias || {}),
//             // Transform all direct `react-native` imports to `react-native-web`
//             'react-native$': 'react-native-web',
//         }
//         config.resolve.extensions = [
//             '.web.js',
//             '.web.ts',
//             '.web.tsx',
//             ...config.resolve.extensions,
//         ]
//         //config.externals = [...config.externals, { 'react-native': 'react-native' }];
//         //config.plugins.push(new webpack.IgnorePlugin(/node_modules\/react-native/))

//         return config
//     },
// });

module.exports = withPlugins([withTM, [withExpo]]
    //     , {
    //     webpack: config => {
    //         config.resolve.alias = {
    //             ...(config.resolve.alias || {}),
    //             // Transform all direct `react-native` imports to `react-native-web`
    //             'react-native$': 'react-native-web',
    //         }
    //         config.resolve.extensions = [
    //             '.web.js',
    //             '.web.ts',
    //             '.web.tsx',
    //             ...config.resolve.extensions,
    //         ]
    //         //config.externals = [...config.externals, { 'react-native': 'react-native' }];
    //         //config.plugins.push(new webpack.IgnorePlugin(/node_modules\/react-native/))

    //         return config
    //     },
    // }
)