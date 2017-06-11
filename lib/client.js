exports = module.exports = function(settings) {
  var xmpp = require('node-xmpp-client');
  
  
  //var options = settings.toObject();
  //var options = settings.isolate(this.baseNS);
  var options = { jid: 'client1@localhost', password: 'secret' };
  var client = new xmpp.Client(options);
  return client;
}

exports['@require'] = [ 'http://i.bixbyjs.org/Settings' ];
exports['@singleton'] = true;
exports['@implements'] = 'http://i.bixbyjs.org/xmpp/Client';
