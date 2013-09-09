module.exports = process.env.NODEGLASS_COV
  ? require('./lib-cov/nodegrass')
  : require('./lib/nodegrass');