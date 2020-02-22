import { pool } from '../adaptors/connectPosgre'
import { DonorReg } from '../types'

export const createUser = async (data: DonorReg) => {
  const { fullName, email, phoneNumber, bloodType, birthDate, password } = data;
  const params = [ fullName, email, phoneNumber, bloodType, birthDate, password ]

  const query = `
  INSERT INTO donor(fullName, email, phoneNumber, bloodType, birthDate, password)
    VALUES($1, $2, $3, $4, $5, $6)
  RETURNING *`
  try {
    const res = await pool.query(query, params)
    console.log(res.rows[0].count)
    return res.rows[0].count as number
  } catch (err) {
    console.log(err.stack)
    return 0
  }
}

export const checkUser = async (email: string, password: string) => {
  const query = `
    SELECT 1
    FROM donor
      WHERE email = $2 AND password = $1
    RETURNING *`
  const params = [email, password]
  try {
    const res = await pool.query(query, params)
    console.log(res.rows[0])
  } catch (err) {
    console.log(err.stack)
  }
}