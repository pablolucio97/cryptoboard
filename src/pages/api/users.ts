import {NextApiRequest, NextApiResponse} from 'next'
import { getSession } from 'next-auth/client'
import  connectDb from '../../services/MongoClient'

connectDb()

export default async(req: NextApiRequest, res: NextApiResponse) : Promise<void> => {
    const {dbConnect} = await connectDb()
    if(req.method === 'GET'){
        const session = await getSession({req})
        const {name, email} = session.user
        const hasuser = await dbConnect.collection('users').findOne({email})
        if(!hasuser){
           await dbConnect.collection('users').insertOne({name, email})
        }
        return res.send('User added')

    }else{
        res.send('Mehtod not allowed')
        console.log('Mehtod not allowed')
    }
}
