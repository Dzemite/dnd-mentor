'use strict';

/**
 * subclass service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::subclass.subclass');
