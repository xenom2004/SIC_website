import { NextAuthOptions } from "next-auth";
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import mongoose from "mongoose";
import connection from "../../../lib/db";
import User from "../../../lib/modal/user";
import bcrypt from "bcrypt"; // Import bcrypt for password hashing

export const options = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
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
                // console.log("called")
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
    },
    callbacks: {
        session: async ({ session, token, user }) => {
            // console.log(session,"session","user");
            
            if (session?.user) {
                session.user.googleId = token.uid;
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
        strategy: 'jwt',
        
    },
    secret: process.env.NEXTAUTH_SECRET,
};
