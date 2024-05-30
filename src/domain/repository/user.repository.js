const UserModel = require('../models/user.model');

const find = async (filter) =>
  await UserModel.findOne(filter).select('-password');

const list = async (filter) =>
  await UserModel.find(filter).select('-password');

const create = async (user) =>
  await new UserModel({ ...user }).save();

const update = async ({ _id }, user) =>
  await UserModel.findByIdAndUpdate(_id, user, { new: true }).select('-password');

const remove = async ({ _id }) =>
  await UserModel.findByIdAndDelete(_id);

module.exports = {
  find,
  list,
  create,
  update,
  remove,
};
