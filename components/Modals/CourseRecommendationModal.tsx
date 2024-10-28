"use client"
 
import * as React from "react"

import CategoriesSelect from "../DropdownMenus/CategoriesSelect"
import LanguagesSelect from "../DropdownMenus/LanguagesSelect"
 
function CourseRecommendationModal() {
    const [showModal, setShowModal] = React.useState(true)
  return (
    <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-2xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <h3 className="text-2xl font-semibold px-7 pt-7">
                    General Information
                </h3>
                {/*body*/}
                <div className="relative px-10 flex-auto pb-4">
                  <p className="my-4 text-gray-400 leading-relaxed font-[400] font-sans">
                    Let us know your course preferences so we can recommend
                    the best options tailored to your learning goals!
                    Share what interests you most,
                    and we’ll suggest courses that fit your needs.
                  </p>
                    <div className="flex flex-col">
                        <div className="flex flex-col">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400"> Languages </span>
                                <LanguagesSelect />
                            </div>
                            <span className="text-slate-700"> English, French, Spanish </span>
                        </div>
                        <hr className="w-full bg-gray-400 h-px my-4" />
                        <div className="flex flex-col">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-400"> Categories </span>
                            <CategoriesSelect />
                        </div>
                        <span className="text-slate-700 max-sm:max-w-full break-words"> UI/UX Design, Web Development, Machine Learning, DevOps </span>
                        </div>
                    </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-semibold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Not Now
                  </button>
                  <button
                    className="bg-blue-600 text-white hover:bg-blue-500 active:bg-blue-600 uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-40 overflow-y-hidden fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}

export default CourseRecommendationModal