require('ts-node').register({
  transpileOnly: true,
  compilerOptions: {
    target: 'es2017',
    module: 'commonjs',
  },
});

module.exports = require('./vue.config.ts').default;
