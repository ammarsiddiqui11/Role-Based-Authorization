import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import User from '../models/userModel.js'

const register = async (req,res) =>{
    try {
        const {username,password,role} = req.body
        const hashedPassword = await bcrypt.hash(password,10)
        const newUser = new User({username,password:hashedPassword,role})
        await newUser.save()
        res.status(200).json({message: `${username} created succesfully`})
    } catch (error) {
        console.error('register error:', error)
        res.status(500).json({message:'something went wrong'})
    }
}

const login = async (req,res) =>{
    try {
        const {username,password} = req.body
        const user = await User.findOne({username})
        if(!user){
         res.status(400).json({message:`${user} not found`})   
        }
        const isMatch = bcrypt.compare(password,user.password)
        if(!isMatch){
            res.status(400).json({message:`invalid credentials`})
        }
        const token = jwt.sign(
            {id: user._id, role: user.role},
            process.env.JWT_SECRET,
            {expiresIn : '1d'}
        )
        res.status(200).json(token)
    } catch (error) {
        res.status(400).json({message:`something went wrong`})
    }
}

export {login,register}