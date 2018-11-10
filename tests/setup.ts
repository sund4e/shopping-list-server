import { Model } from 'objection';
import { knex } from '../src/database';
Model.knex(knex);
