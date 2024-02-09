const bcrypt = require('bcrypt');
const saltRound = Number(process.env.BCRYPT_SALT_ROUND);

const generateHash = (password)=>{
    return bcrypt.hashSync(password,saltRound);
}

const verifyPassword = (hashedPassword,plainPassword)=>{
    return bcrypt.compareSync(plainPassword,hashedPassword);
}

module.exports = {generateHash,verifyPassword};