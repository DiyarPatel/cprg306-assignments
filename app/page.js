import Link from "next/link";

export default function Page() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <main className="p-8 bg-zinc-300 border border-pink-200 rounded-md shadow-md">
        <h1 className="text-3xl font-bold text-grey mb-4">CPRG 306: Web Development 2 - Assignments</h1>
        <p>
          <Link href="week-2" className="text-2xl flex justify-center text-blue-500 hover:text-blue-700 hover:underline" >Week 2 </Link>
        </p>
        <p>
          <Link href="week-3" className="text-2xl flex justify-center text-blue-500 hover:text-blue-700 hover:underline">Week 3</Link>
        </p>
        <p>
          <Link href="week-4" className="text-2xl flex justify-center text-blue-500 hover:text-blue-700 hover:underline">Week 4</Link>
        </p>
        <p>
          <Link href="week-5" className="text-2xl flex justify-center text-blue-500 hover:text-blue-700 hover:underline">Week 5</Link>
        </p>
        <p>
          <Link href="week-6" className="text-2xl flex justify-center text-blue-500 hover:text-blue-700 hover:underline">Week 6</Link>
        </p>
        <p>
          <Link href="week-7" className="text-2xl flex justify-center text-blue-500 hover:text-blue-700 hover:underline">Week 7</Link>
        </p>
        <p>
          <Link href="week-8" className="text-2xl flex justify-center text-blue-500 hover:text-blue-700 hover:underline">Week 8</Link>
        </p>
        <p>
          <Link href="week-10" className="text-2xl flex justify-center text-blue-500 hover:text-blue-700 hover:underline">Week 10</Link>
        </p>
      </main>
    </div>
  );
}