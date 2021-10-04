const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Retrieve records.
   *
   * @return {Array}
   */

  async index(ctx) {
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.prueba.search(ctx.query);
    } else {
      entities = await strapi.services.prueba.find(ctx.query);
    }

    return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.prueba }));
  },
};
