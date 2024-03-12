const CrudRepository = require("./crud-repository");
const { User } = require("../models");
class UserRepository extends CrudRepository {
  constructor() {
    super(User);
  }
  async getByEmail(username) {
    const response = await User.findOne({
      where: { username: username },
    });
    return response;
  }
}
module.exports = UserRepository;
