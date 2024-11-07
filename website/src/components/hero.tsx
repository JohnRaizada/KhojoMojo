import Link from "next/link";

export default function Hero() {
    return (
        <section className="pt-[2.25rem] lg:pt-[5.25rem] px-[1.25rem] xl:px-[12.75rem]">
            <h1 className="text-center text-[2rem] lg:text-[4rem] lg:leading-[5.75rem] leading-10 font-medium">
                Reunite with your lost items.
            </h1>
            <p className="text-center pt-6 text-gray-300 lg:text-[1.125rem] lg:leading-7">
                Search our database or report an item to connect with someone who can help. Reclaim your lost belongings or help someone find theirs.
            </p>
            <span className="flex w-full gap-x-4 pt-8 lg:gap-x-24 justify-center">
                <Link href="/lostForm"  className="font-medium bg-red-700 p-[0.625rem] text-center rounded-lg w-1/2 py-4 px-8 lg:w-fit">I Lost Something</Link>
                <Link href="/foundForm"  className="font-medium bg-green-600 p-[0.625rem] text-center rounded-lg w-1/2 py-4 px-8 lg:w-fit">I Found Something</Link>
            </span>
        </section>
    )
}