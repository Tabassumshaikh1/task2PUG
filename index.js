console.log("My_Pug_UI");
const express = require("express");
const app = express();
const port = 9999;
const fs = require('fs');
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/home", (req, res) => {
  res.render("home");
});
app.get("/aboutus", (req, res) => {
  res.render("aboutus");
});
app.get("/services", (req, res) => {
  res.render("services");
});
app.get("/gallery", (req, res) => {
  res.render("gallery");
});
app.get("/contact", (req, res) => {
  res.render("form");
});
app.post("/postdata",(req,res)=>{
  let name= req.body.name;
  let email = req.body.email;
  let subject= req.body.subject;
  let comments= req.body.comments
  const data = {name:req.body.name,email:req.body.email , subject:req.body.subject,comments:comments}
  fs.appendFile('formdetails.txt', `${JSON.stringify(data)}\n` , function (err) {
    if (err) throw err;
    console.log('Saved!');
    res.send(`Form Submitted Successfully`)
  
  });
})

app.get("/details", (req, res) => {
  res.sendFile('formdetails.txt',{root:"./"})
});




app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server in running on port ${port}`);
  }
});
