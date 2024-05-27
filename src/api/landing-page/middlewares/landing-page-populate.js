"use strict";

/**
 * `landing-page-populate` middleware
 */

const populate = {
  metadata: {
    populate: {
      metaImage: {
        fields: ["name", "alternativeText", "caption", "url"],
      },
    },
  },
  blocks: {
    populate: {
      link: { populate: true },

      card: {
        populate: {
          image: {
            fields: ["name", "alternativeText", "caption", "url"],
          },
        },
      },

      plan: {
        populate: ["services", "link"],
      },

      form: {
        populate: ["input", "button"],
      },
    },
  },
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In landing-page-populate middleware.");

    ctx.query = {
      populate,
      ...ctx.query,
    };

    await next();
  };
};
