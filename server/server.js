const path =require('path')
const express= require('express');
const PORT=process.env.PORT|| 3002;

const publicPath= path.join(__dirname,"../pubic/");
console.log("public path ::"+publicPath);

const app=express()
app.use(express.static(publicPath));

app.listen(PORT,()=>{
    console.log(`Listening at port :: ${PORT}`)
})