import { NextAuthOptions } from "next-auth";
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import mongoose from "mongoose";
import connection from "../../../lib/db";
import User from "../../../lib/modal/user";
import bcrypt from "bcrypt"; // Import bcrypt for password hashing
import jwt from "jsonwebtoken";

export const options = {
    providers: [
     
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "your-username"
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "your-password"
                }
            },
            async authorize(credentials) {
                const connect = await mongoose.connect(connection.connection);

                try {
                    // Find user by username
                    const user = await User.findOne({ name: credentials.username });

                    if (!user) {
                        throw new Error('User not found');
                    }

                    // Compare hashed password with provided password using bcrypt
                    const passwordMatch = await bcrypt.compare(credentials.password, user.password);

                    if (!passwordMatch) {
                        throw new Error('Invalid credentials');
                    }

                    // If credentials are valid, return user
                    return user;
                } catch (error) {
                    throw error;
                } finally {
                    // Close the database connection
                    await mongoose.connection.close();
                }
            }
        })
    ],
    pages: {
        signIn: "/login",
        newUser:"/newUser",
    },
    callbacks: {
        session: async ({ session, token, user }) => {
            // console.log(session,"session","user");
            // console.log(session,"My session",token);
            const connect = await mongoose.connect(connection.connection);

            try {
                // Find user by username
                // console.log(session.user,"rn")
                // console.log(session.user.email,"email")
                const user = await User.findOne({ 'name': session.user.name });
                // console.log(session.user.email,"email2")
                if(user){
                    // console.log(user,"dbguygey")
                    token.isAdmin=user.isAdmin;
                }

                if (!user) {
                    const r=await User.create({profileName:session.user.name,name:session.user.email,email:session.user.email,"isAdmin":"notadmin"});
                    // console.log(r,"Add")
                }
                // If credentials are valid, return user
              
            } catch (error) {
                throw error;
            } finally {
                // Close the database connection
                // await mongoose.connection.close();
            }

            // console.log(token,"tokens",session,"my ses")
            if (session?.user) {
                session.user.token = token.uid;
                session.user.isAdmin=token.isAdmin;
                session.accessToken = jwt.sign(
                    { username: session.user.name },
                    "h5bh5y",
                    { expiresIn: "1h" }
                  );
            }
            return session;
        },
        jwt: async ({ user, token }) => {
            if (user) {
                token.uid = user.id;
            }
            return token;
        }
    },
    session: {
        strategy: 'jwt'
    },
    secret: process.env.NEXTAUTH_SECRET,
};
