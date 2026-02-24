// server ko start karna
// database se connect karna

const app = require("./src/app");

const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://veeresh:k9tUvMHhsqJlvc38@cluster0.lvnttjf.mongodb.net/day-6").then(()=>{
    console.log("db connected");
    
})

app.listen(3000, () => {
  console.log("server is running on PORT 3000");
});
