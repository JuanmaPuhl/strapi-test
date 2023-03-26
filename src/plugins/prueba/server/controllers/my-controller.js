'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('prueba')
      .service('myService')
      .getWelcomeMessage();
  },
});
