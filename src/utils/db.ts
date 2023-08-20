var mysql = require('mysql2');

export function connectToDb(db:string) {
    return mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "anshu@9002",
        database: db
    });

}
