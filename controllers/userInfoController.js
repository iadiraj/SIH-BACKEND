const db = require('../configs/mongoose');
const User = require('../models/User');
const UserInfo = require('../models/UserInfo');
const bcrypt = require('bcrypt');
const updateHelper = require('../methods/updateInfoHelper');
module.exports.getInfo = async (req, res) => {
    try {
        const username = req.user.username;
        const user = await User.findOne({username}).populate('userInfo').exec();
        return res.status(200).json({
            user: user
        });
    } catch (e) {
        console.error(e);
        return res.status(500).json({
            message: 'Internal Server Error'
        });
    }
};

module.exports.updateInfo = async(req, res)=>{
    try{
        const username = req.user.username;
        const user = await User.findOne({username}).populate('userInfo').exec();
        await updateHelper.updateInfo(req, user);
        return res.status(200).json({
            message : "SUCCESSFUL!"
        });
    }catch (e){
        console.log(e);
        return res.status(502).json({
            message: 'BAD GATEWAY'
        });
    }
}