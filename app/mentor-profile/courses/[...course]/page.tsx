"use client";
import MentorProfileSidebar from "@/components/sidebars/MentorProfileSidebar";
import React from "react";
import { useDropzone } from "react-dropzone";
import image from "@/components/Images/Courses/UI.png";
import { CircleDollarSignIcon, CompassIcon, LanguagesIcon, PencilLineIcon, PlusCircle, UserPenIcon } from "lucide-react";
import DragAndDrop from "@/components/Inputs/DragAndDrop";
import CourseThumbnailDragAndDrop from "@/components/Inputs/CourseThumbnailDragAndDrop";
import MentorEditCourseAccordion from "@/components/Accordions/MentorEditCourseAccordion";

function MentorCourses() {
  const [preview, setPreview] = React.useState<string | ArrayBuffer | null>(
    image.src
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
        <h1 className="text-xl font-extrabold tracking-tight text-gray-900 max-md:text-lg md:pl-8">
          My Courses &gt;{" "}
          <span className="text-violet-600">
            Artificial Intelligence - From Zero to Hero
          </span>
        </h1>
        <div className="grid lg:grid-cols-6 gap-4 w-full max-w-[1500px] mx-auto justify-items-center max-sm:flex max-sm:flex-col max-sm:items-center">
          <div className="py-8 rounded-3xl bg-white mt-4 lg:col-span-4 col-span-3 min-w-full">
            <div className="grid gap-4 mx-4 max-sm:mx-2 px-8 max-sm:px-2 border rounded-xl mt-4 py-8">
              <div className="">
                <div className="flex justify-between w-full items-center">
                  <p className="text-slate-800 font-semibold text-lg">
                    Thumbnail
                  </p>
                  <p {...getRootProps()} className="w-fit h-fit cursor-pointer py-2 px-4 flex border rounded-lg gap-2 hover:bg-gray-200/30 transition-all duration-150">
                    <input
                      type="file"
                      {...getInputProps()}
                      maxLength={1}
                      max={1}
                    />
                    <PencilLineIcon className="w-[1.1rem] h-[1.1rem] translate-y-[2px]" />
                    Edit
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <CourseThumbnailDragAndDrop preview={preview} setPreview={setPreview} />
              </div>
            </div>
            <hr className="mt-8" />
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
              <MentorEditCourseAccordion />
            </div>
            <div className="grid gap-4 mx-4 max-sm:mx-2 px-8 max-sm:px-2 border rounded-xl mt-4 py-8 bg-[#C0C0C0]/15">
              <div className="flex justify-between w-full items-center">
                <p className="text-slate-800 font-semibold text-lg">
                  Course Price
                </p>
                <button className="w-fit h-fit py-2 px-4 text-gray-500 hover:text-gray-600 transition-all duration-150">
                  Cancel
                </button>
              </div>
              <div className="flex max-sm:flex-col gap-2 items-center w-full">
                <div className="relative w-full">
                  <input
                    type="number"
                    className="outline-none focus:border-blue-500 appearance-none no-arrows text-sm border-2 rounded-xl h-[2.6rem] pl-10 focus:caret-indigo-500 w-full"
                  />
                  <CircleDollarSignIcon className="top-0 translate-y-[9px] translate-x-2 absolute w-[1.4rem] h-[1.4rem]" />
                </div>
                <button className="max-sm:w-full whitespace-nowrap px-4 py-2 w-fit h-fit text-white bg-blue-600 rounded-lg hover:bg-blue-700/90 active:bg-blue-700 transition-all duration-150">
                  {" "}
                  Save Changes{" "}
                </button>
              </div>
            </div>
            <div className="grid gap-4 mx-4 max-sm:mx-2 px-8 max-sm:px-2 border rounded-xl mt-4 py-8">
              <div className="flex justify-between w-full items-center">
                <p className="text-slate-800 font-semibold text-lg"> Course Language </p>
                <button className="w-fit h-fit py-2 px-4 flex border rounded-lg gap-2 hover:bg-gray-200/30 transition-all duration-150">
                  <UserPenIcon className="w-5 h-5" />
                  Edit
                </button>
              </div>
              {
                false &&
                <div className="relative w-full">
                  <input
                    type="number"
                    className="outline-none focus:border-blue-500 appearance-none no-arrows text-sm border-2 rounded-xl h-[2.6rem] pl-10 focus:caret-indigo-500 w-full"
                  />
                  <LanguagesIcon className="top-0 translate-y-[11px] translate-x-2 absolute w-[1.2rem] h-[1.2rem]" />
                </div>
              }
              <p className="pl-8 font-medium text-gray-500">
                English
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MentorCourses;
