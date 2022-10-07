import mysql from 'mysql2/promise'

const con = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PWD,
    database: process.env.MYSQL_DB,
    timezone: '+00:00',
    typeCast: function (field, next){
        if(field.type === "TYNI" && field.length === 1 ){
            return (field.string() === '1');
        }

        else if(field.type.includes('DECIMAL')){
            return Number(field.string());
        }

        else {
            return next();
        }
    }
})

console.log('DB conectado!')

export { con } 