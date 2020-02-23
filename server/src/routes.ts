import { NextFunction, Request, Response, Router } from 'express'
import { isUserPasswordValid, createUser } from 'sql/postgres';
import { DonorReg } from 'types';

const router = Router()

// USER
router.post('/login/donor', async ( req, response ) => {
  const data = req.body;

  try {
    const result = await isUserPasswordValid(data.email, data.password);
    response.json(result);
  } catch (error) {
    response.json(error);
  }
})

router.post('/create/user', async ( req, response ) => {
  const data = req.body;

  try {
    const result = await createUser(data as DonorReg);
    response.json(result);
  } catch (error) {
    response.json(error);
  }
})

router.put('/update/user', ( req, res ) => {
  const data = req.body;

  try {
    //updateUser
  } catch (error) {
    res.json(error);
  }
})

router.post('/create/point', ( req, res ) => {
  //const data = req.body;

  try {
    //createPoint
  } catch (error) {
    res.json(error);
  }
})

export default router