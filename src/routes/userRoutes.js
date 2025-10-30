import express from 'express'
import roleMiddleware from '../middlewares/roleMiddleware.js'
import verifyToken from '../middlewares/authMiddleware.js'
const router = express.Router()

router.get('/admin',verifyToken, roleMiddleware('admin'),(req,res) => {
    res.json({message:'hello from admin'})
})
router.get('/manager',verifyToken,roleMiddleware('manager','admin'),(req,res) => {
    res.json({message:'hello from manager'})
})
router.get('/user',verifyToken,roleMiddleware('user','admin','manager'),(req,res) => {
    res.json({message:'hello from user'})
})

export default router