exports = module.exports = function(verifyToken) {
  var Strategy = require('passport-http-bearer');
  
  var strategy = new Strategy({ passReqToCallback: true }, verifyToken);
  return strategy;
};

exports['@implements'] = 'http://i.bixbyjs.org/xmpp/auth/Scheme';
exports['@scheme'] = 'bearer';
exports['@require'] = [
  './verifytoken'
];
