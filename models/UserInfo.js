const mongoose = require('mongoose');
const UserInfoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    subjectMarks: {
        type: Object,
        required: true,
    },
    dob: {
        type: Date,
        // required: true,
    },
    std: {
        type: String,
        required: true
    },
    score:[{
        type: Object,
        required: true,
    }]
});
const UserInfo = mongoose.model('UserInfo', UserInfoSchema);
module.exports = UserInfo;
