const db = require('../configs/mongoose');
const User = require('../models/User');
const UserInfo = require('../models/UserInfo');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const JWT_SECRET_KEY = require('../misc/misc');

module.exports.signup = async (req, res)=>{
    try{
        const username = req.body.username;
        const password = req.body.password;
        const name = req.body.name;
        const phone = req.body.phone;
        const email = req.body.email;
        const dob = req.body.dob;
        const std = req.body.std;
        const subjectMarks = req.body.subjectMarks;
        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        // Create UserInfo in DB
        const userInfo = await UserInfo.create({
            name: name,
            phone: phone,
            email: email,
            dob: dob,
            std: std,
            subjectMarks: subjectMarks
        });
        const user = await User.create({
            username: username,
            password: hashedPassword,
            userInfo: userInfo._id
        });
        // Generate JWT.
        const token = jwt.sign({username}, JWT_SECRET_KEY);
        return res.status(201).json({
            message : "SignUp Successfully!",
            token: token
        });
    }catch (e) {
        console.log(e);
        return res.status(500).json({message : 'An Error Occurred!'});
    }
}
module.exports.login = async(req, res) => {
    try{
        const username = req.body.username;
        const password = req.body.password;
        const user = await User.findOne({username});
        if(!user){
            return res.status(400).json({message : 'User Not Found!'});
        }
        // Verify Password
        const isValidPassword = await bcrypt.compare(password, user.password);
        if(!isValidPassword){
            return res.status(400).json({message: 'Invalid Password!'});
        }
        // Generate JWT
        const token = jwt.sign({username}, JWT_SECRET_KEY);
        return res.status(201).json({
            message : "LogIn Successfully!",
            token: token
        });
    }catch (e) {
        console.log(e);
        return res.status(500).json({message : 'An Error Occurred'});
    }
}