'use client';

import { AiFillAmazonCircle } from "react-icons/ai";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ModeToggle } from "./ModeToggle";
import {  MenuIcon, X } from "lucide-react";
import { useState } from "react";
import Sidebar from "./Sidebar";
import logo from '../public/logo.png';
import Image from "next/image";

const Navbar = () => {
    const [open,setOpen] = useState(false)
    return (
        <div className=" bg-primary dark:bg-slate-700 text-white py-3 px-5 flex justify-between items-center">
            <Link href="/">
                <Image src={logo} alt="logo" className="w-12 h-12 md:w-20 md:h-14" />
            </Link>

            <div className="flex items-center gap-4 md:flex-row-reverse">
                
                <DropdownMenu >
                    <DropdownMenuTrigger className="outline-none">
                        <Avatar>
                            <AvatarImage src="https://imgs.search.brave.com/j0_zkv9dWxxdV5tyHOVEIBnvaBKrZbd2e0CBDZEL94Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDI0NTA2/NzMuanBn" />
                            <AvatarFallback className="text-black">AB</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <Link href="/profile">Profile</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                        <Link href="/auth">Logout</Link>
                        </DropdownMenuItem>
                        
                    </DropdownMenuContent>
                </DropdownMenu>
                <ModeToggle />
            <button className="block z-50  text-slate-400 transition-all duration-500 ease-linear md:hidden" onClick={()=>setOpen(!open)}>
                {open ? <X /> : <MenuIcon /> }
            </button>
            </div>
            {open && <div className="z-40 absolute top-1 right-0 min-h-screen  min-w-[390px] transition-all duration-500 ease-linear md:hidden">
                    <Sidebar />
                </div>}
        </div>
    )
}

export default Navbar