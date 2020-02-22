import { NextFunction, Request, Response, Router } from 'express'


const router = Router()

// USER
router.get('/login', ( req, res ) => {
  const data = req.body;

  try {
    //checkUser
  } catch (error) {
    res.json(error);
  }
})

router.post('/create/user', ( req, res ) => {
  const data = req.body;

  try {
    //createUser
  } catch (error) {
    res.json(error);
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