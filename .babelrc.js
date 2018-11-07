const alias = require('./alias.config.js').resolve.alias
module.exports = {
  'presets': [
    'module:metro-react-native-babel-preset'
  ],
  'plugins': [
    [
      'module-resolver',
      {
        'alias': alias
      }
    ]
  ]
}
