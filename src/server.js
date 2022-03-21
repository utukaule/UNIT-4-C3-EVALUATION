const app = require('./index');
const connect = require("./config/db");

app.listen(3333, async()=>{
    try{
        await connect();
        console.log("listning to port 3333")
    }
    catch (err){
        console.log(err);
    }

})