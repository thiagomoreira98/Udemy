const _ = require('lodash');

module.exports = (req, res, next) => {
  const bundle = res.locals.bundle
  
  if(bundle.erros) {
    const errors = parseErrors(bundle.errors);
    return res.status(500).json({ errors });
  }

  next();
}

const parseErrors = (nodeRestfulErrors) => {
  const errors = [];
  _.forIn(nodeRestfulErrors, error => errors.push(error.message));
  return errors;
}