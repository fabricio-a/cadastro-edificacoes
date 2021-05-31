import { Pool } from 'pg';

const pool = new Pool({
    user: 'USR',
    password: 'PSW',
    database: 'db_cadastro',
    host: 'localhost',
    port: 5432
});

export default pool;
