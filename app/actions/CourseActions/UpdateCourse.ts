"use server"
import prisma from "@/lib/util/db";
import { deleteImageByPath, saveBase64Image } from "@/lib/util/Images";

export async function UpdateCourse(formdata: FormData): Promise<{success: boolean, error?: string}> {
    try{
        const title = formdata.get('title') as string;
        const price = formdata.get('price') as string;
        const description = formdata.get('description') as string;
        const language = formdata.get('language') as string;
        const difficulty = formdata.get('difficulty') as string;
        const category = formdata.get('category') as string;
        const image = JSON.parse(formdata.get('image') as string);
        const courseId = formdata.get('courseId') as string;
        const course = await prisma.course.findUnique({where: {id: courseId}, select: {image: true}})
        
        const deletedImage = deleteImageByPath(course?.image?.path as string)
        if(!deletedImage) throw new Error("Failed to delete image")
        
        const courseimagepath = saveBase64Image(image as string, title)
        const updatedCourse = await prisma.course.update({
            where: {
                id: courseId
            },
            data: {
                title,
                price: parseFloat(price),
                description,
                language,
                difficulty,
                category,
                image: {
                    update: {
                        where: {
                            id: course?.image?.id
                        },
                        data: {
                            path: courseimagepath,
                            location: "local"
                        }
                    }
                }
            }
        })
        if(!updatedCourse) throw new Error("Failed to update course")
        return {success: true}
    }catch(err: any){
        console.log(err)
        return {success: false, error: err.message}
    }
}