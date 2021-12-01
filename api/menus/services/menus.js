"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
  findByLocale: async (locale) => {
    return await strapi.query("menus").find({ locale });
  },
};
