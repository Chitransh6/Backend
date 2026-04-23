const Express = require("express");
const app = Express();

app.use(function(res,req,next){
    console.log("middle ware chlaa");
    next();
})

app.use(function(res,req,next){
    console.log("middle 2 ware chlaa");
    next();
})

app.get("/",function(req,res){
    res.send("i learned how to create route");
})

app.get("/profile",function(req,res,next){
    return next(new Error('error h'));
});

app.use((err,req,res,next)=>{
     console.error(err.stack)
    res.status(500).send("error aa gya");
})

app.listen(3000);