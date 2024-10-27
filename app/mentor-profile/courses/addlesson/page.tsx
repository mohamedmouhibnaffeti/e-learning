"use client";
import MentorProfileSidebar from "@/components/sidebars/MentorProfileSidebar";
import { useDropzone } from "react-dropzone";
import image from "@/components/Images/Courses/UI.png";
import { BoltIcon, CaptionsIcon, CheckIcon, CircleDollarSignIcon, CompassIcon, LanguagesIcon, PencilLineIcon, PenSquareIcon, PlusCircle, Trash2Icon, UserPenIcon } from "lucide-react";
import DragAndDrop from "@/components/Inputs/DragAndDrop";
import CourseThumbnailDragAndDrop from "@/components/Inputs/CourseThumbnailDragAndDrop";
import MentorEditCourseAccordion from "@/components/Accordions/MentorEditCourseAccordion";
import { Link1Icon } from "@radix-ui/react-icons";
import ChapterDetailsInput from "@/components/Inputs/ChapterDetailsInput";

function AddLesson() {
  return (
    <div className="w-full mb-6 flex">
      <MentorProfileSidebar />
      <div className="w-full h-full max-md:p-2 p-12 bg-[#C0C0C0]/15">
        <h1 className="text-xl font-extrabold tracking-tight text-gray-900 max-md:text-lg md:pl-8">
          My Courses &gt; {" "}
          <span>
            Artificial Intelligence - From Zero to Hero
          </span>
          {" "} &gt; {" "}
          <span className="text-violet-600">
            Add Lesson
          </span>
        </h1>
        <div className="grid lg:grid-cols-6 gap-4 w-full max-w-[1500px] mx-auto justify-items-center max-sm:flex max-sm:flex-col max-sm:items-center">
          <div className="py-8 rounded-3xl bg-white mt-4 lg:col-span-4 col-span-3 min-w-full">
            <div className="grid gap-4 mx-4 max-sm:mx-2 px-8 max-sm:px-2 border rounded-xl mt-4 py-8">
              <div className="">
                <div className="flex justify-between w-full items-center">
                  <p className="text-slate-800 font-semibold text-lg">
                    Lesson Title
                  </p>
                  <p className="w-fit h-fit cursor-pointer py-2 px-4 flex border rounded-lg gap-2 hover:bg-gray-200/30 transition-all duration-150">
                    <PencilLineIcon className="w-[1.1rem] h-[1.1rem] translate-y-[2px]" />
                    Edit
                  </p>
                </div>
              </div>
              <div className="flex max-sm:flex-col gap-2 items-center w-full">
                  <div className="relative w-full">
                    <input
                      type="text"
                      className="outline-none focus:border-blue-500 text-sm border-2 rounded-xl h-[2.6rem] pl-10 focus:caret-indigo-500 w-full"
                    />
                    <CaptionsIcon className="top-0 translate-y-[11px] translate-x-2 absolute w-[1.2rem] h-[1.2rem]" />
                  </div>
                <button className="max-sm:w-full whitespace-nowrap px-4 py-2 w-fit h-fit text-white bg-blue-600 rounded-lg hover:bg-blue-700/90 active:bg-blue-700 transition-all duration-150">
                  Save Changes
                </button>
              </div>
            </div>
            <hr className="mt-8" />
            <div className="gap-4 grid mx-4 px-8 max-sm:px-2 border rounded-xl mt-8 py-8">
                <div className="flex justify-between w-full items-center">
                    <p className="text-slate-800 font-semibold text-lg">
                    Chapters
                    </p>
                    <button className="w-fit h-fit py-2 px-4 flex border rounded-lg gap-2 hover:bg-gray-200/30 transition-all duration-150">
                    <PlusCircle className="w-[1.2rem] h-[1.2rem] translate-y-[2px]" />
                    Add Chapter
                    </button>
                </div>
                <ChapterDetailsInput />
                <hr className="my-4" />
                
                <div className="w-full flex max-sm:justify-between justify-end gap-3 px-8 items-center">
                    <button className="text-blue-600 hover:text-blue-500 active:text-blue-600 transition-all duration-150 flex gap-1"> Save <CheckIcon className="w-5 h-5 translate-y-px" />  </button>
                </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddLesson