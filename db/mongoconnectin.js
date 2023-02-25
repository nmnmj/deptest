import mongoose from "mongoose";

const connectDB = async (DATABASE_URL)=>{
    const db_ooptions={
            
            dbName:"school",
            // authSource:"schooldb"
        } 
    // const db_ooptions={

    //     dbName: process.env.DB_NAME || 'school',
    // } 
    try {
        await mongoose.connect(DATABASE_URL, db_ooptions)
        console.log("connected to db")
    } catch (error) {
        console.log(error)
    }
}

export default connectDB