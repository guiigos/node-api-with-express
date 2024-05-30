const jsonwebtoken = require('jsonwebtoken');

class TokenController {
  static async generate(req, res, next) {
    if (!req.user) return next();

    const payload = {
      email: req.user.email,
    };

    const JWTSECRET = process.env.JWTSECRET;
    const JWTEXPIRE = process.env.JWTEXPIRE;

    const token = jsonwebtoken.sign(payload, JWTSECRET, {
      expiresIn: JWTEXPIRE,
    });

    res.json({ token });
  }

  static async validate(req, res, next) {
    const authHeader = req.headers.authorization;

    if (authHeader) {
      const token = authHeader.split(' ')[1];

      const JWTSECRET = process.env.JWTSECRET;
      return jsonwebtoken.verify(token, JWTSECRET, (err, payload) => {
        if (err) return next(err);

        req.payload = payload;
        return next();
      });
    }

    res.unauthorized();
  }
}

module.exports = TokenController;
