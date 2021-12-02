class FoodService {
  async findById(id, controller) {
    return await controller.findOne({ params: { id } });
  }
  async getFoodsListBySubMenuId(id, controller) {
    const subMenu = await controller.findOne({ params: { id } });
    return subMenu.foods;
  }
}

const foodService = new FoodService();

module.exports = {
  foodService,
};
