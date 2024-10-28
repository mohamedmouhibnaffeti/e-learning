"use client"
import DragAndDrop from '@/components/Inputs/DragAndDrop'
import MentorProfileSidebar from '@/components/sidebars/MentorProfileSidebar'
import { useDropzone } from "react-dropzone";
import React from 'react'
import image from "@/components/Images/mentors/mentor3.jpg"
import ProfileProgress from '@/components/Progress/ProfileProgress';
import { CheckIcon, CompassIcon, UserPenIcon, XIcon } from 'lucide-react';
import UserProfileSidebar from '@/components/sidebars/UserProfileSidebar';

function UserProfile() {
  const [preview, setPreview] = React.useState<string | ArrayBuffer | null>(image.src)
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
    [setPreview],
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
        <UserProfileSidebar />
        <div className="w-full h-full max-md:p-2 p-12 bg-[#C0C0C0]/15">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 max-md:text-lg md:pl-8">
            Edit Profile
          </h1>
          <div className="grid lg:grid-cols-6 gap-4 w-full max-w-[1500px] mx-auto justify-items-center max-sm:flex max-sm:flex-col max-sm:items-center">
            <div className="py-14 rounded-3xl bg-white mt-4 lg:col-span-4 col-span-3 min-w-full">
              <div className="flex gap-4 items-center px-14 max-sm:px-2 max-sm:justify-center">
                <DragAndDrop preview={preview} setPreview={setPreview} />
                <div className="flex flex-col gap-3 max-sm:hidden">
                  <p {...getRootProps()} className="text-black border-2 font-medium rounded-xl w-fit px-4 text-center py-2 hover:bg-gray-200/20 cursor-pointer transition-all duration-150">
                    <input type="file" {...getInputProps()} maxLength={1} max={1} />
                    Upload new photo
                  </p>
                  <p className="text-gray-400 font-extralight">
                    At least 800 x 800 px recommended. <br/> JPG or PNG is allowed
                  </p>
                </div>
              </div>
              <hr className="mt-16" />
              <div className="gap-4 grid mx-4 px-8 max-sm:px-2 border rounded-xl mt-4 py-8">
                <div className="flex justify-between w-full items-center">
                  <p className="text-slate-800 font-semibold text-lg"> Personal Info </p>
                  <button className="w-fit h-fit py-2 px-4 flex border rounded-lg gap-2 hover:bg-gray-200/30 transition-all duration-150"> 
                    <UserPenIcon className="w-5 h-5" />
                    Edit
                  </button>
                </div>
                <div className="w-full mt-2 gap-3 flex flex-col">
                  <div className="flex flex-col">
                    <span className="text-gray-400">Full Name</span>
                    <span className="text-slate-700">Mohamed Mouhib</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-400">Email</span>
                    <span className="text-slate-700 max-sm:max-w-[200px] truncate">contact.mohamednaffeti@gmail.com</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-400">Phone</span>
                    <span className="text-slate-700">(216) 92144354</span>
                  </div>
                </div>
              </div>
              <div className="gap-4 grid mx-4 px-8 max-sm:px-2 border rounded-xl mt-4 py-8">
                <div className="flex justify-between w-full items-center">
                  <p className="text-slate-800 font-semibold text-lg"> Course Preferences </p>
                  <button className="w-fit h-fit py-2 px-4 flex border rounded-lg gap-2 hover:bg-gray-200/30 transition-all duration-150"> 
                    <UserPenIcon className="w-5 h-5" />
                    Edit
                  </button>
                </div>
                <div className="w-full mt-2 gap-3 flex flex-col">
                  <div className="flex flex-col">
                    <span className="text-gray-400"> Languages </span>
                    <span className="text-slate-700"> English, French, Spanish </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-400"> Courses Categories </span>
                    <span className="text-slate-700 max-sm:max-w-[200px] truncate"> UI/UX Design, Web Development, Machine Learning, DevOps </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8 rounded-3xl bg-white mt-4 flex flex-col justify-center items-center gap-4 h-fit w-max col-span-2">
              <h1 className="text-lg font-semibold">
                Complete your profile
              </h1>
              <ProfileProgress value={40} />
              <div className="flex flex-col gap-2">
                <p className="gap-2 flex items-center font-medium text-slate-900">
                  <CheckIcon className="" />
                  <span>Setup Account</span>
                  <span className="text-gray-400">10%</span>
                </p>
                <p className="gap-2 flex items-center font-medium text-slate-900">
                  <CheckIcon className="" />
                  <span>Upload your photo</span>
                  <span className="text-gray-400">5%</span>
                </p>
                <p className="gap-2 flex items-center font-medium text-gray-400">
                  <XIcon className="w-6 h-6" />
                  <span>Courses Preferences</span>
                  <span className="text-green-500 font-semibold">+25%</span>
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default UserProfile