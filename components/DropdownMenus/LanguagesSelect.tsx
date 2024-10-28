"use client"
import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type Checked = DropdownMenuCheckboxItemProps["checked"]


function LanguagesSelect() {
    const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
    const [showPanel, setShowPanel] = React.useState<Checked>(false)
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild className="w-fit">
            <Button variant="outline">Choose languages</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Languages</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
                checked={showStatusBar}
                onCheckedChange={setShowStatusBar}
            >
                English
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
                checked={showPanel}
                onCheckedChange={setShowPanel}
            >
                Spanish
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
                checked={showStatusBar}
                onCheckedChange={setShowStatusBar}
            >
                French
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
                checked={showPanel}
                onCheckedChange={setShowPanel}
            >
                Arabic
            </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LanguagesSelect