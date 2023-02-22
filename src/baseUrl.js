let baseUrl;
if(process.env.NODE_ENV==="production"){
    //baseUrl = "classapp.onrender.app"
} else{
    baseUrl = "http://localhost:4200"

}

export default baseUrl