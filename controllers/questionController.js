const db = require('../configs/mongoose');
const User = require('../models/User');
const UserInfo = require('../models/UserInfo');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const path = require('../misc/path');
const JWT_SECRET_KEY = require('../misc/misc');
module.exports.getQuestion = async (req, res)=>{
    try{
        const type = req.params.type;
        const username = req.user.username;
        const user = await User.findOne({username}).populate('userInfo').exec();
        const std = user.userInfo.std;
        if(type === "apt"){
            const newPath = `${path.questionPath}/${std}th_question.json`;
            return res.status(201).sendFile(newPath);
        }else if(type === "personality"){
            const newPath = `${path.questionPath}/${type}_question.json`;
            return res.status(201).sendFile(newPath)
        }
        return res.status(404).json({
            message: "NOT FOUND!"
        })
    }catch (e){
        console.log(e);
        return res.status(201).json({
            message:"BAD GATEWAY!"
        });
    }
}
