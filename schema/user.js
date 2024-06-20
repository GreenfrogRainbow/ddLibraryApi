const joi = require('joi')


const username = joi.string().alphanum().min(3).max(20).required()
const password = joi.string().pattern(/^\S{6,15}$/)
const nickname = joi.string().min(3).max(20)

exports.reg_login_schema = {
    body: {
        username,
        password
    }
}

const avatar = joi.string().dataUri().required()
exports.update_user_pic = {
    body: {
        avatar
    }
}
