"use strict";
const { sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  findByLocale: async (locale) => {
    const menus = await strapi.services.menus.findByLocale(locale);
    return sanitizeEntity(menus, { model: strapi.models.menus });
  },
};
