// --------------------Connection using mongoose---------------------
import mongoose from 'mongoose';
const connectDB =async() =>{
    try{
        const db = await mongoose.connect("mongodb+srv://singhdarshan2166_db_user:DarshanDB123@cluster0.gxbjxbi.mongodb.net/walnut");
        console.log("MongoDB Connected:", db.connection.host);
        // return db;
    }catch(error){
        console.log(error);
    }
}
export default connectDB;