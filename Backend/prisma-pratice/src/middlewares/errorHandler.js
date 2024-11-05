export const errorHandler = async (err, req, res, next) => {
    let message = "Internal Server Error"
    let status = 500

   console.log(err.name);
   console.log(err.message);
   
   switch(err.name){
    case 'PrismaClientValidationError':
    case 'PrismaClientValidationError':
        status = 400
        message = "Bad Request"
        break;
    
    case 'NotFoundError':
        status = 404
        message = err.message
        break;
   }

   res.status(status).send(message)
}