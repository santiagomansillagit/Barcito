import {config} from 'dotenv'  //lee las variables de entorno definidas en la computadora.

config();   //ejecutamos la lectura.

console.log(process.env.NICKNAME) // leo el valor de mi variable de entorno.


// definimos el puerto de trabajo
export default{
    port: process.env.PORT || 3000
}

