const { UserRepository } = require("../repository");
const userRepository = new UserRepository();
async function login(username, password) {
  const user = await userRepository.getByEmail(username);
  if (!user) {
    throw new Error("User not found");
  }
  const validPassword = await userRepository.comparePassword(password);
  if (!validPassword) {
    throw new Error("Invalid password");
  }
  return user;
}
module.exports = {
  login,
};
