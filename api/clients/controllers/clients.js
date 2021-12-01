"use strict";
const { sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  create: async (client) => {
    const entity = await strapi.services.clients.create(client);
    return sanitizeEntity(entity, { model: strapi.models.clients });
  },
  update: async (client) => {
    const entity = await strapi.services.clients.update(
      { id: client.id },
      client
    );
    return sanitizeEntity(entity, { model: strapi.models.clients });
  },
};
