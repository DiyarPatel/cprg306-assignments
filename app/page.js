import Link from "next/link";

export default function Page() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <main className="text-3xl font-bold mb-4">CPRG 306: Web Development 2 - Assignments</main>
      <p>
        <Link href="week-2" className="text-blue-500 hover:text-blue-700" >Week 2 </Link>
      </p>
      <p>
        <Link href="week-3" className="text-blue-500 hover:text-blue-700">Week 3</Link>
      </p>
      <p>
        <Link href="week-4" className="text-blue-500 hover:text-blue-700">Week 4</Link>
      </p>
      <p>
        <Link href="week-5" className="text-blue-500 hover:text-blue-700">Week 5</Link>
      </p>
      <p>
        <Link href="week-6" className="text-blue-500 hover:text-blue-700">Week 6</Link>
      </p>
      <p>
        <Link href="week-7" className="text-blue-500 hover:text-blue-700">Week 7</Link>
      </p>
    </div>
  );
}