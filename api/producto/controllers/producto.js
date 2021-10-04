const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  /**
   * Retrieve records.
   *
   * @return {Array}
   */

  async findMe(ctx) {
    let entities;
    console.log("----------------");
    /* if (ctx.query._q) {
      entities = await strapi.services.producto.search(ctx.query);
    } else {
      entities = await strapi.services.producto.find(ctx.query);
    }

    return entities.map((entity) =>
      sanitizeEntity(entity, { model: strapi.models.producto })
    ); */
    return {
      hola: "mundo",
    };
  },
};
