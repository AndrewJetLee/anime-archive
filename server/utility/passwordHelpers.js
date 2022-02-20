const crypto = require("crypto");


module.exports.encryptPassword = async (password) => {
    let salt = crypto.randomBytes(32).toString("hex");
    let hash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString("hex");
    return {
        salt,
        hash
    }
}   

