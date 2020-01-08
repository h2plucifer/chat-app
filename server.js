const path =require('path')
const http=require('http');
const socketIO=require('socket.io');
const express= require('express');

const PORT=process.env.PORT|| 3002;
const app=express()
const publicPath= path.join(__dirname,'pubic');
console.log('public path ::'+publicPath);

app.use(express.static((path.join(__dirname,'public'))))

const server=http.createServer(app)
const io=socketIO(server);


io.on('connection',(socket)=>{
    console.log("New client connected !!")
    socket.on('createMessage',(message)=>{
    //    io.emit('newMessage',{
    //         from:message.from,
    //         msg:message.msg,
    //         createdAt:new Date().getTime()
    //    })


    // socket.broadcast.emit('newMessage',{
    //         from:message.from,
    //         msg:message.msg,
    //         createdAt:new Date().getTime()
    //    })

       socket.emit('newMessage',{
            from:'Admin',
            msg:'Welcome To Chat App',
            createdAt:new Date().getTime()
       })
       socket.broadcast.emit('newMessage',{
           from:'Admin',
           msg:"New user just joined",
           createdAt:new Date().getTime()
       })

    })
    
    })



io.on('disconnect',()=>{console.log('one client got disconnected')})






server.listen(PORT,()=>{console.log(`listening at ${PORT} `)})




// app.listen(PORT,()=>{
//     console.log(`Listening at port :: ${PORT}`)
// })