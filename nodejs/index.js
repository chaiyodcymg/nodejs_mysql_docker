const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql2');

const con = mysql.createPool({
  host:"db",
  user:"user",
  password: "password",
  database: "mydb",

});

con.getConnection((err)=>{
  if(err){
      console.log("Err connecting to Mysql =",err)

      return;
  }
  console.log("Connecting succesfully!")
})

app.get('/', (req, res) => {

    con.query("SELECT * FROM users",
    (err,result)=>{
         if(err){
             console.log(err)
          return  res.status(500).send(err)
         }
         return res.status(200).json(result)
        })

})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})