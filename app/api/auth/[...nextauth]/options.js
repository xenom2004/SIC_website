import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";


export const options={
    providers: [
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
    pages: {
        signIn: "/login",
    },
    callbacks:{
        session: async ({session, token, user}) => {
            if(session?.user){
                session.user.loginType = token.sub?.includes('google.com')? 'google' :'credentials';
            }
            return session
        },
        jwt: async ({user, token}) => {
            if(user){
                token.uid = user.id
            }
            return token
        }
    },
    session:{
        strategy:'jwt'
    },
    secret: process.env.NEXTAUTH_SECRET,
}
