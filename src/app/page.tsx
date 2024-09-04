import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col p-5">
      <div className=" text-9xl font-bold  animate-bounce mt-44">
        <h1 className="animate-pulse text-center">Hello World</h1>
      </div>
      <Link
        href="/products"
        className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3"
      >
        Go To Products
      </Link>
      <Link
        href="/variants"
        className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3"
      >
        Go To Variants
      </Link>
      {/* <ThemeToggle /> */}
    </div>
  );
}
