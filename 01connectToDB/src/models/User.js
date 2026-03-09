import mongoose from 'mongoose';

const userSchema = mongoose.schema({
    firstName: { 
        type: string 
    },
    lastName: { 
        type: string 
    },
    age: { 
        type: number 
    },
    password:{
        type: string
    }
});
const User = mongoose.model("User", userSchema);
export default User;