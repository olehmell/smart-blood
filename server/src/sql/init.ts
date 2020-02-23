import { readFileSync } from 'fs';
import { pool } from '../adaptors/connectPosgre';

const ENV = process.env.NODE_ENV || 'development';
const buildPath = ENV === 'production' ? 'build/' : '';
const initDb = readFileSync(buildPath + 'src/sql/initDb.sql', 'utf8');

pool.query(initDb, (err) => {
    if (err) { throw err; }
    console.log('Database inited');
})
