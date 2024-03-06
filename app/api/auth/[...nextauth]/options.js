import { NextAuthOptions } from "next-auth";
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";


export const options={
    providers: [
        GitHubProvider({
            clientId:process.env.GITHUB_ID,
            clientSecret:process.env.GITHUB_SECRET
        }),
        GoogleProvider({
            clientId:process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_SECRET,
        }),
        CredentialsProvider({
            name:"Credentials",
            credentials:{
                username:{
                    label: "Username",
                    type: "text",
                    placeholder: "your-username"
                },
                password:{
                    label:"Password",
                    type:"password",
                    placeholder:"your-password"
                }
            },
            async authorize(credentials){
                const user={id: "007",name:"Joe",password: "1234"}
                if(!credentials?.username || !credentials.password){
                    throw new Error('Invalid credentials')
                }
                if(credentials?.username===user.name&&
                    credentials?.password===user.password){
                    return user
                }
                else{
                    return null
                }
            }

        })
    ],
    
}
