exports = module.exports = function(authenticateToken) {

  return function verifyToken(req, token, cb) {
    console.log('STUB VERIFY TOKEN');
    console.log(token)
    
    authenticateToken(token, function(err, user) {
      console.log(err);
      console.log(user);
      
      // TODO: Add confirmation method that azp is JID, etc
      
      return cb(null, user);
    });
  }
};

exports['@require'] = [
  'http://i.bixbyjs.org/aaa/authenticateTokenFunc'
];
