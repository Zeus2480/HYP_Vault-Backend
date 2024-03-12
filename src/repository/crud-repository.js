// const { Logger } = require("../config");
// const { error } = require("../utils/common/error-response");
const AppError = require("../utils/errors/app-error");
const { StatusCodes } = require("http-status-codes");
class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    console.log(data);
    const response = await this.model.create(data);
    return response;
  }

  async destroy(data) {
    const response = await this.model.destroy({
      where: { id: data },
    });
    if (!response) {
      throw new AppError(
        "Not able to find the resource",
        StatusCodes.NOT_FOUND
      );
    }
    return response;
  }

  async get(data) {
    const response = await this.model.findByPk(data);
    if (!response) {
      throw new AppError(
        "Not able to found the resource",
        StatusCodes.NOT_FOUND
      );
    }
    return response;
  }

  async getAll() {
    const response = await this.model.findAll();
    console.log(response);
    return response;
  }
  async update(id, data) {
    const [affectedRows] = await this.model.update(data, {
      where: {
        id: id,
      },
    });

    if (affectedRows === 0) {
      throw new AppError(
        "Not able to find the resource you requested",
        StatusCodes.NOT_FOUND
      );
    }

    const updatedRow = await this.model.findOne({
      where: {
        id: id,
      },
    });

    if (!updatedRow) {
      throw new AppError(
        "Failed to retrieve the updated resource",
        StatusCodes.NOT_FOUND
      );
    }

    return updatedRow;
  }
}

module.exports = CrudRepository;
