const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  /**
   * Retrieve records.
   *
   * @return {Array}
   */

  async findMe(ctx) {
    let entities;
    console.log(ctx.state.user);
    if (ctx.query._q) {
      entities = await strapi.services.prueba.search(ctx.query);
    } else {
      entities = await strapi.services.prueba.find(ctx.query);
    }
    //console.log(await strapi.query('prueba').findOne({ id: 1 }))
    const data = entities.map((z) => {
      return {
        id: z.id,
        name: z.peuebua,
        hola: z.hola,
      };
    });
    return data;
  },
};
