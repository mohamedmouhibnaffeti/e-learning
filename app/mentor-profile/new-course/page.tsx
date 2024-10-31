"use client";
import MentorProfileSidebar from "@/components/sidebars/MentorProfileSidebar";
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import image from "@/components/Images/Courses/UI.png";
import { CaptionsIcon, CheckIcon, CircleDollarSignIcon, CompassIcon, LanguagesIcon, PencilLineIcon, PlusCircle, UserPenIcon } from "lucide-react";
import DragAndDrop from "@/components/Inputs/DragAndDrop";
import CourseThumbnailDragAndDrop from "@/components/Inputs/CourseThumbnailDragAndDrop";
import MentorEditCourseAccordion from "@/components/Accordions/MentorEditCourseAccordion";
import CourseDetailsInput from "@/components/Inputs/CourseDetailsInput";
import ChapterDetailsInput from "@/components/Inputs/ChapterDetailsInput";
import { Lesson, Chapter, UpdateChapterValue, Course, UpdateCourseDetail } from "@/types/types";
import { toast } from "sonner";

function CreateCourse() {

  const [CourseDetails, setCourseDetails] = useState<Course>({
    title: '',
    price: 0,
    language: '',
    difficulty: '',
    image: null,
    description: '',
    category: ''
  });

  const updateCourseDetail: UpdateCourseDetail = (field: keyof Course, value: string | number | ArrayBuffer | null) => {
    setCourseDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value
    }));
  };  


  const [lessons, setLessons] = useState<Lesson[]>([]);

  const addLesson = () => {
    setLessons((prevLessons) => {
      if (prevLessons.length > 0) {
        const lastLesson = prevLessons[prevLessons.length - 1];
  
        if (!lastLesson.title) {
          toast("Can't add a new lesson", {
            description: "Please fill in the title for the last lesson before adding a new lesson.",
            action: {
                label: "Retry",
                onClick: () => {},
            },
          })
          return prevLessons
        }
  
        const lastChapter = lastLesson.chapters[lastLesson.chapters.length - 1];
        if (lastChapter && (!lastChapter.title || !lastChapter.videoUrl || lastChapter.duration <= 0 || lastChapter.score <= 0)) {
          toast("Can't add a new lesson", {
            description: "Please fill in all values for the last chapter before adding a new lesson.",
            action: {
                label: "Retry",
                onClick: () => {},
            },
          })
          return prevLessons
        }
      }
  
      return [
        ...prevLessons,
        { title: '', chapters: [] }
      ];
    });
  };
  

  const addChapter = (lessonIndex: number) => {
    setLessons((prevLessons) => {
      const lesson = prevLessons[lessonIndex];
      
      const lastChapter = lesson.chapters[lesson.chapters.length - 1];
      if (lastChapter && (!lastChapter.title || !lastChapter.videoUrl || lastChapter.duration <= 0 || lastChapter.score <= 0)) {
        toast("Can't add a new chapter", {
          description: "Please fill in all values for the previous chapter before adding a new one.",
          action: {
              label: "Retry",
              onClick: () => {},
          },
        })
        return prevLessons;
      }
  
      return prevLessons.map((lesson, index) =>
        index === lessonIndex
          ? {
              ...lesson,
              chapters: [
                ...lesson.chapters,
                {
                  title: '',
                  videoUrl: '',
                  duration: 0,
                  score: 0
                }
              ]
            }
          : lesson
      );
    });
  };
  

  const handleLessonTitleChange = (e: React.ChangeEvent<HTMLInputElement>, lessonIndex: number) => {
    const { value } = e.target;
    setLessons((prevLessons) =>
      prevLessons.map((lesson, index) =>
        index === lessonIndex ? { ...lesson, title: value } : lesson
      )
    );
  };

  const updateChapterValue: UpdateChapterValue = (
    lessonIndex: number,
    chapterIndex: number,
    field: keyof Chapter,
    value: string | number
  ) => {
    setLessons((prevLessons) =>
      prevLessons.map((lesson, lIndex) =>
        lIndex === lessonIndex
          ? {
              ...lesson,
              chapters: lesson.chapters.map((chapter, cIndex) =>
                cIndex === chapterIndex
                  ? { ...chapter, [field]: value }
                  : chapter
              )
            }
          : lesson
      )
    );
  };
  return (
    <div className="w-full mb-6 flex">
      <MentorProfileSidebar />
      <div className="w-full h-full max-md:p-2 p-12 bg-[#C0C0C0]/15">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 max-md:text-lg md:pl-8">
          New Course
        </h1>
        <div className="grid lg:grid-cols-6 gap-4 w-full max-w-[1500px] mx-auto justify-items-center max-sm:flex max-sm:flex-col max-sm:items-center">
          <div className="py-8 rounded-3xl bg-white mt-4 lg:col-span-4 col-span-3 min-w-full">
            <div className="grid gap-4 mx-4 max-sm:mx-2 px-8 max-sm:px-2 border rounded-xl mt-4 py-8">
              <div className="">
                  <p className="text-slate-800 font-semibold text-lg">
                    Thumbnail
                  </p>
              </div>
              <div className="mt-4">
                <CourseThumbnailDragAndDrop preview={CourseDetails.image} setPreview={updateCourseDetail} />
              </div>
            </div>
            <div className="gap-4 grid mx-4 px-8 max-sm:px-2 border rounded-xl mt-8 py-8">
                <p className="text-slate-800 font-semibold text-lg">
                  Course Details
                </p>
              <CourseDetailsInput course={CourseDetails} changeCourseDetails={updateCourseDetail} />
            </div>
            <div className="gap-4 grid mx-4 px-8 max-sm:px-2 border rounded-xl mt-8 py-8">
              <div className="flex justify-between w-full items-center">
                <p className="text-slate-800 font-semibold text-lg">Lessons</p>
                <button
                  className="w-fit h-fit py-2 px-4 flex border rounded-lg gap-2 hover:bg-gray-200/30 transition-all duration-150"
                  onClick={addLesson}
                >
                  <PlusCircle className="w-[1.2rem] h-[1.2rem] translate-y-[2px]" />
                  Add Lesson
                </button>
              </div>

              {lessons.map((lesson, lessonIndex) => (
                <div key={lessonIndex} className="my-2">
                  <div className="flex max-sm:flex-col gap-4 items-center w-full md:px-4 px-2">
                    <p className="whitespace-nowrap sm:w-[25%]">Lesson Title</p>
                    <div className="relative w-full">
                      <input
                        type="text"
                        value={lesson.title}
                        onChange={(e) => handleLessonTitleChange(e, lessonIndex)}
                        className="outline-none peer focus:border-blue-500 text-sm border-2 rounded-xl h-[2.6rem] pl-10 focus:caret-indigo-500 w-full"
                      />
                      <CaptionsIcon className="top-0 translate-y-[11px] translate-x-2 absolute w-[1.2rem] h-[1.2rem] peer-focus:text-blue-500 transition-all duration-100" />
                    </div>
                  </div>
                  <div className="flex justify-between w-full items-center mt-4">
                    <p className="text-slate-800 font-semibold text-lg">Chapters</p>
                    <button
                      className="w-fit h-fit py-2 px-4 flex border rounded-lg gap-2 hover:bg-gray-200/30 transition-all duration-150"
                      onClick={() => addChapter(lessonIndex)}
                    >
                      <PlusCircle className="w-[1.2rem] h-[1.2rem] translate-y-[2px]" />
                      Add Chapter
                    </button>
                  </div>
                  <div className="flex flex-col w-full mt-2">
                    {lesson.chapters.map((chapter, chapterIndex) => (
                      <div key={chapterIndex}>
                        {chapterIndex > 0 && <hr className="mx-8 my-3" />}
                        <ChapterDetailsInput chapter={chapter} lessonindex={lessonIndex} chapterindex={chapterIndex} changeChapterValue={updateChapterValue} />
                      </div>
                    ))}
                  </div>
                  {lessonIndex < lessons.length - 1 && <hr className="mt-8 border-indigo-600" />}
                </div>
              ))}
            </div>

            <div className="w-full sm:justify-end flex px-4 mt-4">
              <button onClick={()=>console.log({lessons, CourseDetails})} className="bg-blue-600 hover:bg-blue-500 active:bg-blue-600 transition-all duration-150 flex gap-1 text-white px-4 py-2 rounded-lg max-sm:w-full justify-center items-center"> Save <CheckIcon className="w-5 h-5 translate-y-px" />  </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateCourse;

