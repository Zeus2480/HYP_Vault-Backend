const { AuthService } = require("../services");
const jwt = require("jsonwebtoken");
const { successResponse, errorResponse } = require("../utils/response");

async function login(req, res) {
  try {
    const { username, password } = req.body;
    const user = await AuthService.login(username, password);

    const payload = {
      id: user.id,
      email: user.email,
      role: user.role,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    successResponse.data = { user, token };
    res.status(200).json(successResponse);
  } catch (err) {
    errorResponse.error = err.message;
    res.status(400).json(errorResponse);
  }
}

module.exports = {
  login,
};
