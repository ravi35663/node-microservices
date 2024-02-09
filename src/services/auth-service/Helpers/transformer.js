// it will make user's data mutable
const transformUser = (user)=>{
    return {...user._doc}
}

module.exports = {transformUser};