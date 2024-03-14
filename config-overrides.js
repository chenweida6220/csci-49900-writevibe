module.exports = function override(config, env) {
    // do stuff with the webpack config...
    config.resolve.fallback = {
      util: require.resolve('util/'),
      path: require.resolve('path-browserify'),
    };
    return config;
  };