"use client"

import {DotLottieReact} from "@lottiefiles/dotlottie-react";
import Link from "next/link";

export default function NotFound() {
    return (
        <main className="grow text-center flex justify-center flex-col items-center ">
                <DotLottieReact src="/NotFound-Animation.json" loop autoplay className="lg:h-[27.5rem]"></DotLottieReact>
                <h1 className="text-3xl font-semibold">404 - PAGE NOT FOUND</h1>
                <h1 className="text-center text-gray-400 pt-5 pb-6">The page you are looking for does not exist.</h1>
                <Link href="/"><button className="grow bg-yellow-600 p-3 rounded-lg font-medium">Go to Home Page</button></Link>
        </main>
    )
}