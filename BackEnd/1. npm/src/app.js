// const { sayHi, sayHello } = require('./developer.js') // import with common npm

import {user} from "./developer.js" // import with module npm
import "dotenv/config" 

console.log(user);
console.log(process.env.secret);


