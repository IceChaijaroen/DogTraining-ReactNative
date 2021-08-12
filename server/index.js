const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host:"localhost",
    password:"",
    database: "dog"
})

app.get('/user', (req, res)=> {
    db.query("SELECT * FROM user", (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.listen('19002', () => {
    console.log('Server is running on port 19002');
})