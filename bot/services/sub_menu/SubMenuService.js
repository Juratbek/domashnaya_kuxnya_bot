class SubMenuService {
  async findById(id, controller) {
    return await controller.findOne({ params: { id } });
  }
  async getSubMenusListByMainMenuId(id, mainMenuController) {
    const mainMenu = await mainMenuController.findOne({ params: { id } });
    return mainMenu.sub_menus;
  }
}

const subMenuService = new SubMenuService();

module.exports = {
  subMenuService,
};
