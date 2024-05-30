const repository = require('../domain/repository/user.repository');
const crypto = require('../modules/crypto');

class UserController {
  static async login(req, res, next) {
    req.user = await repository.find({
      email: req.body.email,
      password: crypto(req.body.password),
    });
    next();
  }

  static index(req, res, next) {
    res.async(repository.list());
  }

  static async show(req, res, next) {
    res.async(repository.list(req.params));
  }

  static async create(req, res, next) {
    res.async(repository.create(req.body));
  }

  static async update(req, res, next) {
    res.async(repository.update(req.params, req.body));
  }

  static async remove(req, res, next) {
    res.async(repository.remove(req.params));
  }
}

module.exports = UserController;
