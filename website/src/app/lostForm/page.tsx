import { FaCircleCheck } from "react-icons/fa6";

// make the box green/ add a tick icon - after entering some value and validating it

export default function LostForm() {
    return (
        <main className={`grow pt-20 m-auto text-white px-16`}>
            <nav>
                <ol className=" pb-7 flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
                    <li className="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                    <span
                        className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                        <FaCircleCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true"/>
                        <span className="me-2">Item</span> Info
                    </span>
                    </li>
                    <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                    <span
                        className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                        <span className="me-2">2</span>
                        Account
                        <span className="hidden sm:inline-flex sm:ms-2">Info</span>
                    </span>
                    </li>
                    <li className="flex items-center">
                        <span className="me-2">3</span> Confirmation
                    </li>
                </ol>
            </nav>
            <hr className="border-t border-gray-200"/>
        </main>
    )
}