import { Server } from "socket.io";


const io = new Server(9000,{
    cors:{
        origin:"http://localhost:3000",
        methods: ["GET", "POST"],
         },
})



let users = [];
let usersNewArray =[];


const addUser = (userData,socketId) => {
    users.push({userData,socketId}) 

    !users.some(user =>  user.userData.sub === userData.sub &&
     usersNewArray.push({...userData,socketId}))
     console.log("this is users array in adduser fn user new array",usersNewArray);
}


const getUser = (userId) => {
    console.log("get user called");
    // console.log("this is users array in getuser fn",users);
    let user = users.find(user => user.userData.sub == userId )
    console.log("user",user);
    return user
}

io.on('connection',(socket)=>{
    console.log("User connected");

    socket.on("addUser",userData => {
        addUser(userData,socket.id);
        io.emit("getUsers",usersNewArray)
    })

    socket.on("sendMessage",data => {
         const user = getUser(data.receiverId)
         io.to(user.socketId).emit("getMessage",data)
    })
  
}) 

io.engine.on("connection_error", (err) => {
    console.log(err);
  });