module.exports = {
  development: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    migrations: {
      tableName: 'knex_migrations'
    },
    pool: {
      max: 10,
      min: 2
    }
  },
  test: {
    client: 'postgresql',
    connection: 'postgres://postgres@localhost:9000/postgres',
    migrations: {
      tableName: 'knex_migrations'
    },
    pool: {
      max: 10,
      min: 2
    }
  }
};
