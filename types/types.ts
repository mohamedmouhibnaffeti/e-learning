export interface Quiz{
    
}

export interface Chapter {
    title: string;
    videoUrl: string;
    duration: number;
    score: number;
}
  
export interface Lesson {
    title: string;
    chapters: Chapter[];
}

export type UpdateChapterValue = (
    lessonIndex: number,
    chapterIndex: number,
    field: keyof Chapter,
    value: string | number
) => void;

export type Course = {
    title: string;
    price: number;
    language: string;
    difficulty: string;
    image: string | ArrayBuffer | null
};

export type UpdateCourseDetail = (field: keyof Course, value: string | number | ArrayBuffer | null) => void;