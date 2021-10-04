"use strict";
const { sanitizeEntity } = require("strapi-utils");
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
  async findOneURL(ctx) {
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.prueba.search(ctx.query);
    } else {
      entities = await strapi.services.prueba.find(ctx.query);
    }

    return entities.map((entity) =>
      sanitizeEntity(entity, { model: strapi.models.prueba })
    );
  },
};
