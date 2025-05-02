const { default: mongoose } = require("mongoose");



const DbConnect =  async()=>{
    if(mongoose.connection.readyState >= 1){
        return ;
    }
    
    try{
      await mongoose.connect('mongodb+srv://ronakvarshney:ronak1234@cluster0.pzisolc.mongodb.net/db');
      console.log("db connected successfully");
    }
    catch(error){
        console.log("not connected")
      console.log(error.message);
    }

}

export default DbConnect ;