import { io } from "socket.io-client";

let baseUrl;
let socket;
if(process.env.NODE_ENV==="production"){
    //baseUrl = "classapp.onrender.app"
} else{
    baseUrl = "http://localhost:4200"
    socket= io("http://localhost:4200")
}

export {socket}
export default baseUrl;