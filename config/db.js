const mysql = require('mysql')

const connectDB = async () => {
    try {
        const connection = mysql.createConnection({
            host: process.env.host,
            user:process.env.USER,
            password:process.env.PASSWORD,
            database:process.env.DATABASE
        })
        console.log('Database Connected........')
    }catch (err) {
        console.error(err)
        process.exit(1)
      }
}

module.exports = connectDB