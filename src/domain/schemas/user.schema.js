const mongoose = require('mongoose');
const crypto = require('../../modules/crypto');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 2,
    max: 80,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    min: 2,
    max: 60,
  },
  password: {
    type: String,
    required: true,
  },
},
{
  versionKey: false,
  timestamps: true,
});

UserSchema.pre('save', async function (next, options) {
  const user = this;

  if (!user.isModified('password')) return next();

  try {
    user.password = crypto(user.password);
    next();
  } catch (err) {
    next(err);
  }
});

module.exports = UserSchema;
