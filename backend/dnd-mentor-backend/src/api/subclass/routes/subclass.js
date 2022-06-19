'use strict';

/**
 * subclass router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::subclass.subclass');
