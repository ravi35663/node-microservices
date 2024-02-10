const successResponse = (message='Success',status=200,data={})=>{
    return {message,status,data};
}

const errorResponse = (message='Error',status=400,data={})=>{
    return {message,status,data};
}

module.exports = {successResponse,errorResponse};