import Button from "@/components/Button";
import Image from "next/image";
import { IoArrowBackOutline } from "react-icons/io5";

import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const product = await fetch(`https://dummyjson.com/products/${id}`).then(
    (res) => res.json()
  );

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `Product: ${product.title}`,
    description: product.description,
    // openGraph: {
    //   images: ["/some-specific-page-image.jpg", ...previousImages],
    // },
  };
}

async function getProduct(id: number) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch product data");
  }
  return res.json();
}
interface IProps {
  params: { id: string };
}

const Page = async ({ params }: IProps) => {
  const { id, title, description, thumbnail } = await getProduct(
    Number(params.id)
  );

  return (
    <div className="mt-20 flex justify-center items-center flex-col">
      <Button />
      <div
        className="bg-blue-400 rounded-md p-5 mx-auto w-[400px] text-center"
        key={id}
      >
        <h1 className="text-3xl font-bold text-black mb-4">{title}</h1>
        <p>{description}</p>
        <div className="mb-4">
          <Image
            src={thumbnail}
            alt={`${title} image`}
            width={400}
            height={400}
            className="w-full h-64 object-fill"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
