const db = require('../configs/mongoose');
const User = require('../models/User');
const UserInfo = require('../models/UserInfo');
const gptEngine = require('../methods/gptChatMethod');
const bcrypt = require('bcrypt');

module.exports.ask = async (req, res)=>{
    try{
        const question = req.body.question;
        const result = await gptEngine.callGpt(question);
        return res.status(201).json(result);
    }catch (e) {
        console.log(e);
        return res.status(500).json({
            message: "BAD GATEWAY"
        });
    }
}