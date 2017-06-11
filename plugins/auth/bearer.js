exports = module.exports = {
  'scheme': require('./bearer/scheme'),
};

exports.load = function(id) {
  try {
    return require('./bearer/' + id);
  } catch (ex) {
    if (ex.code == 'MODULE_NOT_FOUND') { return; }
    throw ex;
  }
};
