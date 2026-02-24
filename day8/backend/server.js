// server ko start karna
// database se connect karna

require('dotenv').config()
const app = require("./src/app")
const connectToDb = require("./src/config/database")

app.listen(3000,()=>{
    console.log("server is running on PORT 3000");
    
})

connectToDb()