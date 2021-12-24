import { Db, MongoClient } from 'mongodb';

interface ConnectType{
    dbConnect: Db;
    client: MongoClient;
}

const uri = process.env.MONGODB_URI
const dbName = process.env.MONGODB_DBNAME


const client = new MongoClient(uri, {
    //@ts-ignore
    useNewUrlParser: true,
    useUnifiedTopology: true
})

export default async function connectDb() : Promise<ConnectType>{
    await client.connect()
    const dbConnect = client.db(dbName)
    return { dbConnect, client}
}