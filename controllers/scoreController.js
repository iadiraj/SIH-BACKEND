const db = require('../configs/mongoose');
const User = require('../models/User');
const UserInfo = require('../models/UserInfo');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const JWT_SECRET_KEY = require('../misc/misc');

module.exports.submitScore = async (req, res)=>{
    try{
        const type = req.body.type;
        const score = req.body.score;
        const username = req.user.username;
        const user = await User.findOne({username}).populate('userInfo').exec();
        const scoreCard = {
            "type" : type,
            "score": score
        };
        user.userInfo.score.push(scoreCard);
        await user.userInfo.save();
        await user.save();
        return res.status(201).json({
            message: "Submitted"
        })

    }catch (e){
        console.log(e);
        return res.status(500).json({
            message: "BAD GATEWAY"
        })
    }
}