export const errorHandler = async (err, req, res, next) => {
    let message = "Internal Server Error"
    let status = 500

   console.log(err.name);
   console.log(err.message);
   
   switch(err.name){
    case 'PrismaClientValidationError':
        status = 400
        message = err.message
        break;
    
    case 'NotFoundError':
        status = 404
        message = err.message
        break;
        
    case 'Unauthorized':
    case 'JsonWebTokenError':
        status = 403
        message = err.message
   }

   res.status(status).send({ message: message })
}