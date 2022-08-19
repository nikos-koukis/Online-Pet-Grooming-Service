import { connectToDatabase } from '../../../lib/db'

async function handler(req, res) {
    if (req.method !== 'POST') {  //Accept Only Post Method
        return;
    }

    const data = req.body;
    const { email } = data;
    const client = await connectToDatabase();
    const db = client.db();

    const existingUser = await db.collection('users').findOne({ email: email });

    if (!existingUser) {
        client.close();
        res.status(422).json({ message: 'This email does not exists!' });
        return;
    }

    if (existingUser && existingUser.verify == false) {
        res.status(422).json({ message: 'This email does not verified!' });
        client.close();
        return;
    }

    res.status(201).json({ message: 'Email Verified' });
    client.close();

}

export default handler;