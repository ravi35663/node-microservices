const axios = require('axios');

const POST = async (url,req) => {
    const body = req.body;
    let token;
    if(req.headers && req.headers.authorization){
        token = req.headers.authorization;
    }
    return await axios.post(url,body,{
        headers: {
            'Content-Type': 'application/json',
            'authorization':token
        },
        user:req.user
    });   
}

const GET = async (url,req)=>{
    let token;
    if(req.headers && req.headers.authorization){
        token = req.headers.authorization;
    }
    return await axios.get(url,{
        headers:{
            'Content-Type': 'application/json',
            'authorization':token
        }
    });
}


module.exports = {POST,GET}