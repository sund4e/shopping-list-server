import Knex from 'knex';

// tslint:disable-next-line no-var-requires
const config = require('../knexfile')[process.env.NODE_ENV || 'development'];

export default Knex(config);
