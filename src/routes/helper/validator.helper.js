const config = {
  abortEarly: false,
  recursive: true,
};

module.exports = (schema) => (req, res, next) => {
  try {
    schema.validateSync(req.body, config);
    next();
  } catch (err) {
    const { message, errors } = err;
    res.payment_required({ message, errors });
  }
}
