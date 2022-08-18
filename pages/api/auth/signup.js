import { hashPassword } from '../../../lib/auth'
import { connectToDatabase } from '../../../lib/db'


async function handler(req, res) {
    if (req.method !== 'POST') {  //Accept Only Post Method
        return;
    }

    const data = req.body;

    const { fullname, email, password, verify = true, created_at = new Date().toLocaleString({ timeZone: "Europe/Athens" }), verified_at = null } = data;

    if (!fullname || !email || !email.includes('@') || !password || password.trim().length < 7) { // API Validation 
        res.status(422).json({
            message:
                'Invalid input - password should also be at least 7 characters long.',
        });
        return;
    }

    const client = await connectToDatabase(); // Custom Function In  '../../../../lib/db'

    const db = client.db();

    const existingUser = await db.collection('users').findOne({ email: email });

    if (existingUser) {
        res.status(422).json({ message: 'This email exists!' });
        client.close();
        return;
    }

    const hashedPassword = await hashPassword(password);

    const result = await db.collection('users').insertOne({
        fullname: fullname,
        email: email,
        password: hashedPassword,
        verify: verify,
        created_at: created_at,
        verified_at: verified_at
    });

    res.status(201).json({ message: 'Created user!' });
    client.close();
}

export default handler;