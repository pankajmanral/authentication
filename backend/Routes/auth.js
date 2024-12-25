const express = require('express')
const router = express.Router()
const User = require('../Model/User')
const { body, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken');
const jwtSecret = 'authenticationPratice'

// Route for registring a new user 
router.post('/register',[
    body("name","Name must be atleast 3 character long").isLength({min:3}),
    body("username","Username must be atleast 3 characters long").isLength({min:3}),
    body("email","Enter a valid email").isEmail(),
    body("password","Password must be atleast 8 characters long").isLength({min:8}),
    body("role","User/Admin").isLength({min:4})
],
async(req,res) => {

    const { name,username,email,password,role } = req.body

    try {
        const result = validationResult(req)
        if(!result.isEmpty()){
            return res.status(400).json({error : result.array()})
        }
        else{
            let user = await User.findOne({email})
            if(user){
                res.status(400).json({error : "User already exist"})
            }
            else{
                const salt = bcrypt.genSaltSync(10)
                const seccurePassword = bcrypt.hashSync(password,salt)

                user = await User.create({
                    name : name,
                    username : username,
                    email : email,
                    password : seccurePassword,
                    role : role
                })

                const data = {
                    user : user.id
                }

                const authToken = jwt.sign(data,jwtSecret)
                return res.status(200).json({authToken})
            }
        }
    } 
    catch (error) {
        return res.status(400).json({error})
    }

})

router.post('/login',[
    body("email","Invalid Credentials").isEmail(),
    body("password","Invalid Credentials").isLength({min:8}),
],
async(req,res) => {
    try {
        const result = validationResult(req)
        if(!result.isEmpty()){
            return res.status(400).json({error : result.array()})
        }   
        else{
            const { email,password } = req.body
            let user = await User.findOne({email})
            if(!user){
                return res.status(400).json("Invalid Credentials")
            }
            else{
                let comparePassword = bcrypt.compareSync(password,user.password)
                if(!comparePassword){
                    return res.status(400).json("Invalid Credentials")
                }
                else{
                    const data = {
                        user : user.id
                    }
                    const authToken = jwt.sign(data,jwtSecret)
                    return res.status(200).json({authToken})
                }
            }
        } 
    } 
    catch (error) {
        return res.status(400).json({error})
    }
})

module.exports = router