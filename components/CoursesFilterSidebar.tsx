import { AlbumIcon, BrainIcon, CalendarIcon, CircleDollarSignIcon, LanguagesIcon, PaletteIcon, SearchIcon, StarHalfIcon, StarIcon, X } from "lucide-react";
import { useContext, useLayoutEffect, useState } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { MultiSlider } from "./ui/multiple-slider";
//import InputWithSuggestions from "./InputWithSuggestions";
import { Button } from "./ui/button";
//import { NeonContext } from "@/app/context/neons";
import axios from "axios";
import StarsComponent from "./Rating/StarsComponent";
export default function ProductsFiltersSideBar({getNeonsByFilter, className, inputClassName, setExpanded}: {className: string, inputClassName: string, setExpanded: any, getNeonsByFilter: any}){
//    const { selectedPriceRange, setSelectedPriceRange, handleCheckboxChange, selectedCategories, handleStyleCheckboxChange, selectedStyle, query, setQuery } = useContext(NeonContext)
    const [allNeonNames, setAllNeonNames] = useState<Array<string>>([])
    const fetchNeonNames = async() => {
        const response = await axios.get("/api/neon/allNeonNames")
        const {names} = response.data
        setAllNeonNames(names)
    }

    return(
        <div className={`${className}`}>         
            <div className="w-full md:hidden flex justify-end pb-4">
                <X className="w-7 h-7 cursor-pointer active:scale-[1.05]" onClick={()=>setExpanded(false)} />
            </div>
            {
                /*
                <InputWithSuggestions query={query} setQuery={setQuery} allNames={allNeonNames}  className={`${inputClassName} mx-auto  mt-2 `} />
                */
            }
            <div className="w-full h-px dark:bg-gray-400 bg-infinity-border mt-6 " />      
            <Accordion type="single" collapsible>
                <AccordionItem value="Category">
                    <AccordionTrigger className="font-medium text-infinity-text_secondary_3"><div className="flex gap-2 items-center"> <AlbumIcon className="text-infinity-purple w-5 h-5" /> All Courses </div></AccordionTrigger>
                    <AccordionContent>
                        <div className="flex flex-col gap-2 pl-4">
                            <div className="flex gap-2 items-center">
                                <Checkbox
                                    checked={true}
                                    onCheckedChange={(checked) => {}}
                                />
                                <span className="text-infinity-text_secondary font-medium"> Resto/Café </span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Checkbox
                                    checked={false}
                                    onCheckedChange={(checked) => {}}
                                />
                                <span className="text-infinity-text_secondary font-medium"> Maison </span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Checkbox
                                    checked={true}
                                    onCheckedChange={(checked) => {}}
                                />
                                <span className="text-infinity-text_secondary font-medium capitalize"> événements </span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Checkbox
                                    checked={false}
                                    onCheckedChange={(checked) => {}}
                                />
                                <span className="text-infinity-text_secondary font-medium capitalize"> sport </span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Checkbox
                                    checked={false}
                                    onCheckedChange={(checked) => {}}
                                />
                                <span className="text-infinity-text_secondary font-medium capitalize"> gaming </span>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="Style">
                    <AccordionTrigger className="font-medium text-infinity-text_secondary_3"> <div className="flex gap-2 items-center"> <BrainIcon className="w-5 h-5 text-infinity-purple" /> Level </div> </AccordionTrigger>
                    <AccordionContent>
                        <div className="flex flex-col gap-2 pl-4">
                            <div className="flex gap-2 items-center">
                                <Checkbox
                                    checked={false}
                                    onCheckedChange={(checked) => {}}
                                />
                                <span className="text-infinity-text_secondary font-medium"> RGB </span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Checkbox
                                    checked={true}
                                    onCheckedChange={(checked) => {}}
                                />
                                <span className="text-infinity-text_secondary font-medium"> Couleurs Normales </span>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="Rating">
                    <AccordionTrigger className="font-medium text-infinity-text_secondary_3"> <div className="flex gap-2 items-center"> <CalendarIcon className="text-infinity-purple h-5 w-5" /> Duration </div> </AccordionTrigger>
                    <AccordionContent>
                        <div className="flex flex-col gap-2 pl-4">
                            <div className="flex gap-2 items-center">
                                <Checkbox />
                                <span className="text-infinity-text_secondary font-medium"> 5 Stars </span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Checkbox />
                                <span className="text-infinity-text_secondary font-medium"> 4 Stars & Up </span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Checkbox />
                                <span className="text-infinity-text_secondary font-medium"> 3 Stars & Up </span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Checkbox />
                                <span className="text-infinity-text_secondary font-medium"> 2 Stars & Up </span>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="Rating">
                    <AccordionTrigger className="font-medium text-infinity-text_secondary_3"> <div className="flex gap-2 items-center"> <LanguagesIcon className="text-infinity-purple h-5 w-5" /> Language </div> </AccordionTrigger>
                    <AccordionContent>
                        <div className="flex flex-col gap-2 pl-4">
                            <div className="flex gap-2 items-center">
                                <Checkbox />
                                <span className="text-infinity-text_secondary font-medium"> 5 Stars </span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Checkbox />
                                <span className="text-infinity-text_secondary font-medium"> 4 Stars & Up </span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Checkbox />
                                <span className="text-infinity-text_secondary font-medium"> 3 Stars & Up </span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Checkbox />
                                <span className="text-infinity-text_secondary font-medium"> 2 Stars & Up </span>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="Rating">
                    <AccordionTrigger className="font-medium text-infinity-text_secondary_3"> <div className="flex gap-2 items-center"> <StarIcon className="text-infinity-purple h-5 w-5" /> Rating </div> </AccordionTrigger>
                    <AccordionContent>
                        <div className="flex flex-col gap-2 pl-4">
                            <div className="flex gap-2 items-center">
                                <Checkbox />
                                <span className="text-infinity-text_secondary font-medium"> 5 Stars </span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Checkbox />
                                <span className="text-infinity-text_secondary font-medium"> 4 Stars & Up </span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Checkbox />
                                <span className="text-infinity-text_secondary font-medium"> 3 Stars & Up </span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Checkbox />
                                <span className="text-infinity-text_secondary font-medium"> 2 Stars & Up </span>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <p className="flex justify-between w-full items-center mt-5">
                <span className="text-infinity-text_secondary_3 text-sm font-medium flex gap-2 items-center">
                    <CircleDollarSignIcon className="w-5 h-5 text-infinity-purple" />
                    <span className="translate-y-px"> Prix </span>
                </span>
                <span className="font-medium text-sm text-white px-2 py-1 bg-red-500/80 rounded-md">
                    {10} - {550}
                </span>
            </p>
            <MultiSlider min={5} max={2500} defaultValue={[5, 2500]} onValueChange={(e)=>{}} className="mt-5" />
            <div className="w-full flex justify-between mt-3">
                <span className="text-xs font-medium text-infinity-text_secondary"> Min: 5 TND </span>
                <span className="text-xs font-medium text-infinity-text_secondary"> Max: 2500 TND </span>
            </div>
            <Button onClick={getNeonsByFilter} className="mt-6 flex items-center gap-2 group"> <span className="group-hover:opacity-80 transition duration-200"> Rechercher </span> <SearchIcon className="w-4 h-4 rotate-90 group-hover:opacity-80 transition duration-200" /> </Button>
        </div>
    )
}