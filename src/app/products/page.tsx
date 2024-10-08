import { Metadata } from "next";
import Link from "next/link";
async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export const metadata: Metadata = {
  title: "Products",
  description: "Generated by create next app",
  icons: {
    icon: "/favicon.ico",
  },
};
const page = async () => {
  const { products } = await getProducts();
  return (
    <>
      <div className="flex justify-center w-full ">
        <div className="flex flex-wrap text-black font-bold justify-start w-[80%]">
          {products?.map((product: any) => (
            <Link
              href={`/products/${product.id}`}
              className="p-4 bg-red-300 m-5 w-[200px] text-center rounded-md cursor-pointer hover:bg-red-400 duration-300"
              key={product.id}
            >
              <h2 className="text-2xl text-center text-sky-800 bg-white w-fit mx-auto px-2 py-1 m-3 rounded-lg">
                {product.id}
              </h2>
              <p> {product.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
