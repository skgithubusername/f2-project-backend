const express = require('express')
const mysql      = require('mysql');
const multer  = require('multer')
const path = require('path')

const app = express()
app.use(express.json())
app.use('/images', express.static(path.join(__dirname, 'public/images')));
// http://localhost:3000/images/1719383905873_Ellipse%205.png
const port = 3000


var con = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'ksradmin'
  });


  con.connect(function(err){
    if(err){
        console.log("Error in connection")
    }else{
        console.log("Connected")
    }
  })



  const storage = multer.diskStorage({
    destination:function(req,file,cb){
        return cb(null , "./public/images")
    },
    filename:function(req,file,cb){
        return cb(null , `${Date.now()}_${file.originalname}`)
    }
  })



  // app.use('/uploads', express.static(path.join(__dirname, 'public/images/uploads')));

  const upload = multer({storage})
app.get('/', (req, res) => {
  res.send('Hello World!')
})



// app.use('/images', express.static(path.join(__dirname, 'public/images')));

app.post('/create', upload.single('file'), (req, res) => {
  // return res.send(req.body)



  
    const sql = "INSERT INTO home (`title`,`subtitle`,`image`) VALUES (?)";
    const values = [
        req.body.title,
        req.body.subtitle,
        req.file.filename

    ]
    con.query(sql , [values] , (err , result)=>{
        if(err) return res.json({Error : 'Error in query'})
            return res.json({Status: "Sucess"})
    })
  })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})