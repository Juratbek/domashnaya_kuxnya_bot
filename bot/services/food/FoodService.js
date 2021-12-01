class FoodService {
  async findById(id, controller) {
    return await controller.findOne({ params: { id } });
  }
}

const foodService = new FoodService();

module.exports = {
  foodService,
};
