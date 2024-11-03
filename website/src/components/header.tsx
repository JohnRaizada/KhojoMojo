"use client"

import Image from "next/image";
import Logo from "@/public/KhojoMojo-Logo-v1.0-Light.svg";
import {IoMenu} from "react-icons/io5";
import {useState} from "react";

const navLinks = [{name: 'Get Started'}, {name: 'About'}, {name: 'Contact'},]

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="absolute top-0 w-full backdrop-blur-md bg-black/[.40] shadow-2xl-[0 40px 30px rgba(0, 0, 0, 0.1)]">
            <span className="flex items-center justify-between py-4 lg:mx-auto lg:px-20 sm:px-5 sm:mx-auto">
                <Image src={Logo} alt="Khojo Mojo Logo" className="font-medium flex items-center px-5"/>
                <nav className="flex gap-x-5 items-center justify-end px-5">
                    <ul className="hidden lg:flex gap-x-[56px] lg:px-7 text-gray-500">
                        {navLinks.map((item, index) => (<li key={index}>{item.name}</li>))}
                    </ul>
                    <button className="bg-yellow-600 p-2.5 rounded-lg ">Sign In</button>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <IoMenu className="block lg:hidden text-white text-2xl "/></button>
                </nav>
            </span>
            {isOpen && <nav className="lg:hidden flex flex-col items-center justify-items-start px-8 pb-2 border-b-[1px] border-b-gray-500">
                <ul className=" w-full divide-y divide-solid">
                    {navLinks.map((item, index) => (
                        <li key={index} className="py-2">{item.name}</li>
                    ))}
                </ul>
            </nav>}
        </header>
    )
}
