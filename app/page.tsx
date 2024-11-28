"use server"
import LearningAdventure from "@/components/LearningAdventure";
import prisma from "@/lib/util/db";

export default async function Home() {
  const courses = await prisma.course.findMany({include: {lessons: true}, take: 4})
  return (
    <LearningAdventure courses={courses} />
  );
}
