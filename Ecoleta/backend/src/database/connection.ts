import knex from 'knex';
import path from 'path';

const connection = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'postgres',
    password: 'f22celtics',
    database: 'ecoleta'
  },
  useNullAsDefault: true,
});

export default connection;