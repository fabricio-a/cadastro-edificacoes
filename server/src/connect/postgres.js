import { Pool } from 'pg';

const pool = new Pool({
    user: 'postgres',
    password: 'seno1414',
    database: 'db_cadastro',
    host: 'localhost',
    port: 5432
});

export default pool;