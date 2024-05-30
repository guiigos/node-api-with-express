module.exports = () => (_, res, next) => {
  res.async = (promise) => {
    return promise
      ?.then(res.ok)
      ?.catch(res.bad_request);
  };

  return next();
};
