import Image from "next/image";
import Logo from "@/public/KhojoMojo-Logo-v1.0-Light.svg";
import { IoMenu } from "react-icons/io5";

const navLinks = [
    {name: 'Get Started'},
    {name: 'About'},
    {name: 'Contact'},
]

export default function Header() {
    return (
        <header className="flex w-full items-center justify-between py-[16px] lg:mx-auto lg:px-20 bg-black/[.20] shadow-2xl-[0 40px 30px rgba(0, 0, 0, 0.1)]">
            <Image src={Logo} alt="Khojo Mojo Logo" className="font-medium flex items-center"/>
            <nav className="flex gap-x-5 items-center justify-end">
                <section className="hidden lg:flex gap-x-[56px] lg:px-7 text-gray-500">
                    {navLinks.map((item, index) => (
                        <p key={index}>{item.name}</p>
                    ))}
                </section>
                <button className="bg-yellow-600 p-[10px] rounded-lg">Sign In</button>
                <IoMenu className="block lg:hidden text-white text-2xl"/>
            </nav>
        </header>
    )
}