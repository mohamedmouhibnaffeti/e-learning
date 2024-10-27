"use client";
import MentorProfileSidebar from "@/components/sidebars/MentorProfileSidebar";
import React from "react";
import { useDropzone } from "react-dropzone";
import image from "@/components/Images/Courses/UI.png";
import { CheckIcon, CircleDollarSignIcon, CompassIcon, LanguagesIcon, PencilLineIcon, PlusCircle, UserPenIcon } from "lucide-react";
import DragAndDrop from "@/components/Inputs/DragAndDrop";
import CourseThumbnailDragAndDrop from "@/components/Inputs/CourseThumbnailDragAndDrop";
import MentorEditCourseAccordion from "@/components/Accordions/MentorEditCourseAccordion";
import CourseDetailsInput from "@/components/Inputs/CourseDetailsInput";
import ChapterDetailsInput from "@/components/Inputs/ChapterDetailsInput";

function CreateCourse() {
  const [preview, setPreview] = React.useState<string | ArrayBuffer | null>(
    null
  );
  const onDrop = React.useCallback(
    (acceptedFiles: File[]) => {
      const reader = new FileReader();
      try {
        reader.onload = () => setPreview(reader.result);
        reader.readAsDataURL(acceptedFiles[0]);
      } catch (error) {
        setPreview(null);
      }
    },
    [setPreview]
  );

  const { getRootProps, getInputProps, isDragActive, fileRejections } =
    useDropzone({
      onDrop,
      maxFiles: 1,
      maxSize: 1000000,
      accept: { "image/png": [], "image/jpg": [], "image/jpeg": [] },
    });
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
                <CourseThumbnailDragAndDrop preview={preview} setPreview={setPreview} />
              </div>
            </div>
            <div className="gap-4 grid mx-4 px-8 max-sm:px-2 border rounded-xl mt-8 py-8">
                <p className="text-slate-800 font-semibold text-lg">
                  Course Details
                </p>
              <CourseDetailsInput />
            </div>
            <div className="gap-4 grid mx-4 px-8 max-sm:px-2 border rounded-xl mt-8 py-8">
                <div className="flex justify-between w-full items-center">
                  <p className="text-slate-800 font-semibold text-lg">
                    Lessons
                  </p>
                  <a className="w-fit h-fit py-2 px-4 flex border rounded-lg gap-2 hover:bg-gray-200/30 transition-all duration-150" href="/mentor-profile/courses/addlesson">
                    <PlusCircle className="w-[1.2rem] h-[1.2rem] translate-y-[2px]" />
                    Add Lesson
                  </a>
                </div>
                <div className="flex max-sm:flex-col gap-4 items-center w-full md:px-4 px-2">
                    <p className="whitespace-nowrap sm:w-[25%]">
                        Price
                    </p>
                    <div className="relative w-full">
                        <input
                        type="text"
                        className="outline-none peer focus:border-blue-500 text-sm border-2 rounded-xl h-[2.6rem] pl-10 focus:caret-indigo-500 w-full"
                        />
                        <CircleDollarSignIcon className="top-0 translate-y-[11px] translate-x-2 absolute w-[1.2rem] h-[1.2rem] peer-focus:text-blue-500 transition-all duration-100" />
                    </div>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between w-full items-center">
                  <p className="text-slate-800 font-semibold text-lg">
                    Chapters
                  </p>
                  <a className="w-fit h-fit py-2 px-4 flex border rounded-lg gap-2 hover:bg-gray-200/30 transition-all duration-150" href="/mentor-profile/courses/addlesson">
                    <PlusCircle className="w-[1.2rem] h-[1.2rem] translate-y-[2px]" />
                    Add Chapter
                  </a>
                </div>
                <ChapterDetailsInput />
            </div>
            <div className="w-full sm:justify-end flex px-4 mt-4">
              <button className="bg-blue-600 hover:bg-blue-500 active:bg-blue-600 transition-all duration-150 flex gap-1 text-white px-4 py-2 rounded-lg max-sm:w-full justify-center items-center"> Save <CheckIcon className="w-5 h-5 translate-y-px" />  </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateCourse;
