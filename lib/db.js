const mysql = require('mysql')

const connection = mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'tiger',
        database:'node_app'
    }
)

connection.connect((err)=>{
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log('Connected to database')
        }
    })
module.exports=connection;

//https://webdeasy.de/en/complete-login-system-with-node-js-vue-js-restapi-jwt-part-1-2/#restapi