import Knex from 'knex';
import { Model } from 'objection';

// tslint:disable-next-line no-var-requires
const config = require('../knexfile')[process.env.NODE_ENV || 'development'];
export const knex = Knex(config);

// Bind models to knex
Model.knex(knex);
