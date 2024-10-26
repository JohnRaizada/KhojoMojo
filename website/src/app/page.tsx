import Link from "next/link";

export default function Home() {
  return (
    <main className="grow">
      <section>
        <h1 className="text-6xl font-bold">Khojo Mojo</h1>
        <p className="text-2xl mt-3">
          Reunite with your lost items. Search our lost and found database or
          post your lost or found item to connect with someone who can help.
          Reclaim your lost belongings or help someone find theirs.
        </p>
        <span className="flex flex-wrap items-center justify-center mt-6">
          <Link href="/search" className="text-4xl m-8">
            I lost something
          </Link>
          <Link href="/post" className="text-4xl m-8">
            I found something
          </Link>
        </span>
      </section>
    </main>
  );
}
