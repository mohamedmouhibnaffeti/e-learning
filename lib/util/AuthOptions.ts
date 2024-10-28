import { SignToken } from "@/lib/util/SIgnToken"
import FacebookProvider from "next-auth/providers/facebook"
import GoogleProvider from "next-auth/providers/google"

const AuthOptions = {
    pages:  {
        signIn: "/auth/sign-in"
    },
    providers: [
        FacebookProvider({
            clientId: process.env.FACEBOOK_ID as string,
            clientSecret: process.env.FACEBOOK_SECRET as string,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
        })
    ]
}

export default AuthOptions