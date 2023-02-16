const fs = require("fs");

const Message = require("../models/message")

exports.getHome = (req,res)=>{
  res.render("home");
}

exports.postMsg = (req,res)=>{
  console.log(req.body);
  const name = req.body.name;
  const email = req.body.email;
  const msg= req.body.message;

  const newMsg =new Message({
    name:name,
    email:email,
    message:msg
  });

  newMsg.save().then(()=>{
    console.log("message successfully added!");
    const toSend={
      message:"success"
    };
    console.log(JSON.stringify(toSend));
    res.status(200);
    res.set('content-type','application/json');
    res.send(JSON.stringify(toSend));
  })
  .catch(err=>{
    console.log(err);
    const toSend={
      message:"error"
    };
    res.status(500);
    res.send(JSON.stringify(toSend));
  })




}