exports.getHome = (req,res)=>{
  res.render("home");
}

exports.postMsg = (req,res)=>{
  console.log(req.body);
}