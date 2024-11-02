import express from "express"
import http from "http"
import path from "path"
import { fileURLToPath } from "url";
import { Server } from "socket.io";

    const app=express();
const server=http.createServer(app);
  const io=new Server(server);

    io.on("connection",(client)=>{
        console.log("a new user connected",client.id);
            client.on("client_message",(message)=>{
                   io.emit('emit_message', message);
            })
    })

    app.get("/",(req,res)=>{
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        return res.sendFile(path.join(__dirname,"public","index.html"));
    })

   server.listen(9000,()=>{
      console.log("server started at port 9000");
   })


