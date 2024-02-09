const axios  = require('axios');
const auth_base_url = process.env.AUTH_BASE_URL;
const port = process.env.AUTH_PORT
const loginHandle = async (req,res)=>{
    try {
        console.log('req is ',req.body);
        const {email,password} = req.body;
        const response = await axios.post(`${auth_base_url}/users/login`,{email,password},{
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // if(response && response.)
        return res.send(response.data);
    } catch (error) {
        // res.status(500).send(error)
        console.log('Error is ',error);
        return res.send(error.message);
    }
}

module.exports = {loginHandle};