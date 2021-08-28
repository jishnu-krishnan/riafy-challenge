const express = require('express')
const router = express.Router();
const mysql = require('mysql')

// create database connection
const connection = mysql.createConnection({
    host: process.env.host,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE
})

connection.connect((err)=>{
    if(err) throw err;
    console.log('Database connected')
})

// Get stock names for drop down suggestion
router.get('/stock', (req, res, next) => {
    connection.query('SELECT Name FROM stocks', (error,rows)=>{
        //if(error) throw error
        if(!error){
            res.json(rows);
        }
    })
});

// Get full details of selected stock name
router.post('/search', (req, res, next) => {
    let sql = "SELECT * FROM stocks WHERE Name ='" + req.body.name + "'"
    connection.query(sql, (error,rows)=>{
        if(!error){
            res.json(rows);
        }
    })
});

module.exports = router