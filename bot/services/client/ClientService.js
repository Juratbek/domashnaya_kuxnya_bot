class Client {
  async getByChatId(chatId, controller) {
    const clientsFromDb = await controller.find({
      query: { chat_id: chatId },
    });
    return clientsFromDb[0];
  }
  async setLanguage(client, locale, controller) {
    client.language = locale;
    await controller.update(client);
  }
  async create(client, controller) {
    return await controller.create(client);
  }
}

const clientService = new Client();

module.exports = {
  clientService,
};
