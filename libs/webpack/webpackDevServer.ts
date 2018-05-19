import EConfig from '../settings/EConfig';
import webpackCompiler from './webpackCompiler';
const WebpackDevServer = require('webpack-dev-server');
import webpackConfig from '../../webpack.config';
const eConfig = EConfig.getInstance();

/**
 * 启动webpack服务器
 */
export default function startWebpackDevServer() {
    return new Promise((resolve, reject) => {
        const {server} = eConfig;
        const config = webpackConfig(eConfig);
        new WebpackDevServer(webpackCompiler(), config.devServer).listen(config.port, server, (err) => {
            if (err) {
                reject(err);
            }
            console.log(`监听本地 ${server}:${config.port}`);
            resolve();
        });
    });
}