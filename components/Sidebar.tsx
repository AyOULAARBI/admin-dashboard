import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command";


import { LayoutDashboard, Newspaper, Folders, CreditCard, Search, Calendar, User, Settings, Folder, Shirt, MessageCircleIcon } from "lucide-react"
import Link from "next/link"

const Sidebar = () => {
    return (
        <Command className="rounded-none min-h-screen ">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                
                <CommandGroup heading="Suggestions">
                    <CommandItem className="ml-2 ">
                        <Link href="/" className=" flex items-center gap-3">
                            <LayoutDashboard />
                            Dashboard
                        </Link>
                    </CommandItem>
                    <CommandItem className="ml-2">
                        <Link href="/posts" className=" flex items-center gap-3">
                            <Newspaper />
                            Posts
                        </Link>
                    </CommandItem>

                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Shop">
                    <CommandItem className="ml-2">
                        <Link href="/posts" className=" flex items-center gap-3">
                            <Shirt />
                            Products
                        </Link>
                    </CommandItem>
                    <CommandItem className="ml-2">
                        <Link href="/comments" className=" flex items-center gap-3">
                            <Folders />
                            Categories
                        </Link>
                    </CommandItem>
                </CommandGroup>
                <CommandSeparator />

                <CommandGroup heading="Blog">
                    <CommandItem className="ml-2">
                        <Link href="/posts" className=" flex items-center gap-3">
                            <Newspaper />
                            Posts
                        </Link>
                    </CommandItem>
                    <CommandItem className="ml-2">
                        <Link href="/comments" className=" flex items-center gap-3">
                            <MessageCircleIcon />
                            Comments
                        </Link>
                    </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                    <Link href="/profile" >
                        <CommandItem className="ml-2 flex justify-between items-center gap-3">
                            <span className="flex items-center gap-3">
                                <User />
                                Profile
                            </span>
                            <CommandShortcut>Alt P</CommandShortcut>
                        </CommandItem>
                    </Link>
                    <Link href="">
                        <CommandItem className="ml-2 flex justify-between items-center gap-3">
                            <span className="flex items-center gap-3">
                                <CreditCard />
                                Billing
                            </span>
                            <CommandShortcut>Alt B</CommandShortcut>
                        </CommandItem>
                    </Link>
                    <Link href="">
                        <CommandItem className="ml-2 flex justify-between items-center gap-3">
                            <span className="flex items-center gap-3">
                                <Settings />
                                Settings
                            </span>
                            <CommandShortcut>Alt S</CommandShortcut>
                        </CommandItem>
                    </Link>
                </CommandGroup>
            </CommandList>
        </Command>

    )
}

export default Sidebar