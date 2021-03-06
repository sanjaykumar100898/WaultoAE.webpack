const withCSS = require('@zeit/next-css')

module.exports = withCSS({
    webpack(config) {
        config.module.rules.push({
          test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 100000,
              name: '[name].[ext]'
            }
          }
        });
        return config;
      },
    
    publicRuntimeConfig: {
        APP_NAME: 'ALMOST EVERYTHING',
        API_DEVELOPMENT: 'http://localhost:8000/api',
        API_PRODUCTION: 'https://seoblog.com/api',
        PRODUCTION: false,
        DOMAIN_DEVELOPMENT: 'http://localhost:3000',
        DOMAIN_PRODUCTION: 'https://seoblog.com',
        FB_APP_ID: '1627412520743045'

        
    }
    
    
});
// const webpack = require('webpack')
// const withCSS = require('@zeit/next-css')
// const withPlugins = require('next-compose-plugins');
// const optimizedImages = require('next-optimized-images');
// const path = require('path');
// const isDevelopment = process.env.NODE_ENV === 'development'
// const isProduction = process.env.NODE_ENV === 'production';

// const nextConfig = {
//     webpack: (config, { dev }) => {
//         config.plugins.push(
//             new webpack.EnvironmentPlugin(process.env),
//         );
        
//         config.resolve.alias['components'] = path.join(__dirname, 'components')
//         config.resolve.alias['static'] = path.join(__dirname, 'static')

//         return config;
//     },
// };

// module.exports = withPlugins([
//     [optimizedImages, {
//         handleImages: ['jpeg', 'png'],
//     }],
//     withCSS
//     ],
//     nextConfig
// );