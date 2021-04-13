const request=require("request");
const fs=require('fs'); 
const path = require("path"); 
const os=require("os"); 
const express=require("express"); 
const portNo= process.env.PORT

const app=express();

//paths
const public_path=path.join(__dirname,"/public")

//setup handllebar  and view locations
app.set('view engine', 'hbs')

//routing
app.use(express.static(public_path))
app.get('/download', function(req, res){
    const file = `${__dirname}/resource/Ravi_SDE_IITBHU.pdf`;
    res.download(file); 
    // Set disposition and send it.
  });
app.get('/sendmessage',function(req,res){
  console.log("sending "+req.query.message)
  request('https://api.callmebot.com/whatsapp.php?phone=+918601065279&text='+req.query.message+'&apikey=823407', function (error, response, body) {
   if(error)
   {
     res.send(error)
   }
   else{
     res.send(body)
   }
});
})
// app.get('',(req,resp)=>{
//     resp.send('index') 
// })
// app.get('/about',(req,resp)=>{
//     resp.render('about') 
// })
// app.get('/shop',(req,resp)=>{
//     resp.render('shop') 
// })
// app.get('/shop-single',(req,resp)=>{
//     resp.render('shop-single')
// })
// app.get('/contact',(req,resp)=>{
//     resp.render('contact') 
// })
// app.get('*',(req,res)=>{
//     res.render('error404')
// })

// app.get('/help',(req,resp)=>{
//     resp.send("help page") 
// })

// app.get('/about',(req,resp)=>{
//     resp.send("about page") 
// })

 app.listen(8800)
// app.listen(portNo)