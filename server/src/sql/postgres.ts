import { pool } from '../adaptors/connectPosgre'
import { DonorReg } from '../types'

export const createUser = async (data: DonorReg) => {
  const { fullName, email, phoneNumber, password } = data;
  const params = [ password, fullName, phoneNumber, email ];

  const query = `
  INSERT INTO donor(password, fullname, phone_number, email)
    VALUES(md5($1), $2, $3, $4)`
  try {
    const res = await pool.query(query, params);
    return res.rowCount;
  } catch (err) {
    return err;
  }
}

export const isUserPasswordValid = async (email: string, password: string) => {
  if (!email || !password)
    throw new Error('Wrong data requested');

  const query = `SELECT * FROM donor WHERE email = $1 AND password = md5($2) LIMIT 1`
  const params = [email, password]
  try {
    const res = await pool.query(query, params);
    return res.rows[0];
  } catch (err) {
    return err;
  }
}