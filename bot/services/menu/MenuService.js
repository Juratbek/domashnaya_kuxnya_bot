class MenuService {
  async findByLocale(locale, controller) {
    return await controller.findByLocale(locale);
  }
  async findById(id, controller) {
    return await controller.findOne({ params: { id } });
  }
}

const menuService = new MenuService();

module.exports = {
  menuService,
};
