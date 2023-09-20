const db = require('../configs/mongoose');
const User = require('../models/User');
const UserInfo = require('../models/UserInfo');
const bcrypt = require('bcrypt');
module.exports.updateInfo = async (req, user) => {
    try {
        const newPassword = req.body.password;
        const newHashedPassword = await bcrypt.hash(newPassword, 10);
        const newPhone = req.body.phone;
        const newName = req.body.name;
        const newEmail = req.body.email;
        const newDob = req.body.dob;
        const newStd = req.body.std;
        const newSubjectMarks = req.body.subjectMarks;

        user.password = newHashedPassword;
        user.userInfo.name = newName;
        user.userInfo.email = newEmail;
        user.userInfo.phone = newPhone;
        user.userInfo.dob = newDob;
        user.userInfo.std = newStd;
        user.userInfo.subjectMarks = newSubjectMarks;

        user.userInfo.save();
        user.save();
    } catch (e) {

    }
}