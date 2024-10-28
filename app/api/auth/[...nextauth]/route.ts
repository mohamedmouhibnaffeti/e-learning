import NextAuth from "next-auth/next"
import AuthOptions from "@/lib/util/AuthOptions"

const handler = NextAuth(AuthOptions)