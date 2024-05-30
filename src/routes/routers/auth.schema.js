const yup = require('yup');

module.exports = yup
  .object()
  .shape({
    email:
      yup
        .string()
        .required('Required (email)'),
    password:
      yup
        .string()
        .required('Required (password)'),
  });
