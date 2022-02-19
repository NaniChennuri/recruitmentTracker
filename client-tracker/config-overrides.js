// config-overrides.js
module.exports = function override(config, env) {
    config.resolve.fallback = { 'crypto': false };
    return config
}