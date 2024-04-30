import mongoose from "mongoose";


const DBConnection=async()=>{
    try {
      await  mongoose.connect(process.env.DB_URL)
        console.log("database is connected");
    } catch (error) {
        
    }
}

export default DBConnection;