class SubMenuService {
  async findById(id, controller) {
    return await controller.findOne({ params: { id } });
  }
}

const subMenuService = new SubMenuService();

module.exports = {
  subMenuService,
};
