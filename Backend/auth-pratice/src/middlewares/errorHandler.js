export const errorHandler = async (err, req, res, next) => {
    let message = "Internal Server Error"
    let status = 500
    
    console.log("Error name: ", err.name);
    console.log("Error message: ", err.message);
    
    switch (err.name) {
        case "Bad Request":
            status = 400
            message = err.message
            break;

        case "NotFoundError":
            status = 404
            message = err.message
            break;
        
        case "Unauthorized":
        case "JsonWebTokenError":
        case "PasswordInvalid":
            status = 403
            message = err.message
            break; 
    }

    res.status(status).send({ 'message': message })
}