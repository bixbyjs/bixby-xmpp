exports = module.exports = function(settings) {
  var xmpp = require('node-xmpp-client');
  
  
  var options = settings.toObject();
  
  var client = new xmpp.Client(options);
  return client;
}


exports['@require'] = [ '$settings' ]
exports['@singleton'] = true;
exports['@implements'] = 'http://i.bixbyjs.org/xmpp/Client';
