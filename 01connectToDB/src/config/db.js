// --------------------Connection using mongoose---------------------
import mongoose from 'mongoose';
const connectDB =async() =>{
    try{
        const db = await mongoose.connect(process.env.MONGOOSE_URI);
        console.log("MongoDB Connected:", db.connection.host);
        // return db;
    }catch(error){
        console.log(error);
    }
}
export default connectDB;