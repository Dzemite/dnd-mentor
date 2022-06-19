'use strict';

/**
 *  subclass controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::subclass.subclass');
