"use server";
import prisma from "@/lib/util/db";

export const DeleteCourse = async (courseId: string): Promise<{ success: boolean; error?: string }> => {
  try {
    const subscribedCourses = await prisma.subscribedCourses.findMany({
      where: {
        courseid: courseId,
      },
      select: {
        id: true,
      },
    });

    if (subscribedCourses.length > 0) {
      const subscribedCourseIDs = subscribedCourses.map((sc) => sc.id);

      await prisma.completedChapter.deleteMany({
        where: {
          subscribedCourseID: {
            in: subscribedCourseIDs,
          },
        },
      });
    }

    await prisma.subscribedCourses.deleteMany({
      where: {
        courseid: courseId,
      },
    });

    const deletedCourse = await prisma.course.delete({
      where: {
        id: courseId,
      },
    });

    if (!deletedCourse) {
      return { success: false, error: "Course not found or could not be deleted" };
    }

    return { success: true };
  } catch (err: any) {
    console.error("Error deleting course:", err.message || err);
    return { success: false, error: "An error has occurred during deletion" };
  }
};
