import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"
import { connectToDatabase } from "../../../lib/db";
import { verifyPassword } from "../../../lib/auth";

export default NextAuth({
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                const client = await connectToDatabase();

                const userCollection = client.db().collection('users');
                const user = await userCollection.findOne({ email: credentials.email });

                if (!user) {
                    client.close();
                    throw new Error('No user found!');
                }

                const isValid = await verifyPassword(credentials.password, user.password);

                if (!isValid) {
                    client.close();
                    throw new Error('Could not log in');
                }
                client.close();
                return { email: user.email };    
            }
        })
    ]
}); 