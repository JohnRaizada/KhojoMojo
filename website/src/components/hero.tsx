export default function Hero() {
    return (
        <section className="pt-28 lg:pt-40 px-[20px] lg:px-[300px] ">
            <h1 className="text-center text-[2rem] lg:text-[4rem] lg:leading-[5.75rem] leading-10 font-medium">
                Reunite with your lost items.
            </h1>
            <p className="text-center pt-6 text-gray-300 lg:text-[1.125rem] lg:leading-7">
                Search our database or report an item to connect with someone who can help. Reclaim your lost belongings or help someone find theirs.
            </p>
            <span className="flex w-full gap-x-4 pt-8 lg:gap-x-24 justify-center">
                <button className="font-medium bg-red-700 p-[0.625rem] rounded-lg w-1/2 py-4 px-8 lg:w-fit">I Lost Something</button>
                <button className="font-medium bg-green-700 p-[0.625rem] rounded-lg w-1/2 py-4 px-8 lg:w-fit">I Found Something</button>
            </span>
        </section>
    )
}