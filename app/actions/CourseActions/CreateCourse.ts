"use server"
import AuthOptions from "@/lib/util/AuthOptions"
import { getServerSession } from "next-auth"
import prisma from "@/lib/util/db"
import { Course, Lesson } from "@/types/types"
import { saveBase64Image } from "@/lib/util/Images"

export async function CreateCourse(formdata: FormData): Promise<{success: boolean, error?: string}> {
    const session = await getServerSession(AuthOptions)
    try{
        
        const user = await prisma.user.findUnique({ where: {email_provider: {email: session?.user?.email as string, provider: session?.user?.provider as string}} })
        if(!user) throw new Error("User not found")
        if(user?.role !== "mentor") throw new Error("User is not a mentor")
        const coursedatails = JSON.parse(formdata.get("course") as string) as Course
        const lessons = JSON.parse(formdata.get("lessons") as string) as Lesson[]
        const courseimagepath = saveBase64Image(coursedatails.image as string, coursedatails.title)

        const newCourse = await prisma.course.create({
            data: {
                title: coursedatails.title,
                price: coursedatails.price,
                language: coursedatails.language,
                difficulty: coursedatails.difficulty,
                category: coursedatails.category,
                description: coursedatails.description,
                lessons: {
                    create: lessons.map(lesson => ({
                        title: lesson.title,
                        chapters: {
                            create: lesson.chapters.map(chapter => ({
                                title: chapter.title,
                                videoUrl: chapter.videoUrl,
                                duration: chapter.duration,
                                score: chapter.score,
                            })),
                        }
                    })),
                },
                image: {
                    create: {
                        path: courseimagepath,
                        location: "local"
                    }
                },
            }
        })

        if(!newCourse) throw new Error("Failed to create course")

        return {success: true}
    }catch(err: any){
        return {success: false, error: err.message}
    }
}