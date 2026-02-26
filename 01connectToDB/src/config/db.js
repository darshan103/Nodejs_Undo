import { MongoClient } from 'mongodb';

const url = "mongodb+srv://singhdarshan2166_db_user:DarshanDB123@cluster0.gxbjxbi.mongodb.net/?appName=Cluster0";
// const url = "mongodb+srv://singhdarshan2166_db_user:DarshanDB123@cluster0.gxbjxbi.mongodb.net/";
const client = new MongoClient(url);
const dbname = "nodejsDB"

export async function connectToDB(){
    try{
        console.log("DB connected successfully to SERVER Before");
        await client.connect();
        console.log("DB connected successfully to SERVER After");

        // const db = client.db(dbname);
        // return db;

        return client.db(dbname);
    }catch(error){
        console.log(error);
    }
}