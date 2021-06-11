import sql from 'mssql' 

const dbSettings = {
    user: 'MATEOAR',
    password: '123456',
    server: 'localhost',
    database : 'barcito',
    options : {
        encrypt: true, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }    
    //,port : '4466'  // se le puede especificar el puerto, pero como esta por defecto no hay problema en dejarlo comentado.
}

export async function getConnection(){
    try {
        const pool = await sql.connect(dbSettings);
        
        return pool; 
    } catch (error) {
        console.error(error);
    }
}

export {sql}; 
