"use server"

import AuthOptions from "@/lib/util/AuthOptions"
import prisma from "@/lib/util/db"
import { getServerSession } from "next-auth"

export const UpdateUserPreferences = async(formdata: FormData): Promise<{success: boolean, error?: string}> => {
    const session = await  getServerSession(AuthOptions)
    try{
        const email = session?.user?.email as string
        const provider = session?.user?.provider as string
        const languages = formdata.getAll("languages") as string[]
        const categories = formdata.getAll("categories") as string[]
        const updatedUser = await prisma.user.update({
            where: {email_provider: {email, provider}},
            data: {
                preferredLanguages: languages,
                preferredCategories: categories
            }
        })
        if(!updatedUser){
            return({success: false, error: "error updating user preferences"})
        }
        return {success: true}
    }catch(err: any){
        return {success: false, error: err.message || "an error has occured"}
    }
}