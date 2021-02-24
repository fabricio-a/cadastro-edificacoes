import { Pool } from 'pg';

const pool = new Pool({
    user: 'postgres',
    password: 'seno1414',
    database: 'db_cadastro',
    host: '192.168.1.5',
    port: 5432
});

export default pool;