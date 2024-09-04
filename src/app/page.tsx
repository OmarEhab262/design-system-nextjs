import Button from "@/components/Button";
import ThemeToggle from "@/components/ThemeToggle";
import ButtonUi from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center flex-col p-5">
      <div className=" text-9xl font-bold  animate-bounce">
        <h1 className="animate-pulse text-center">Hello World</h1>
      </div>
      <Link
        href="/products"
        className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3"
      >
        Go To Products
      </Link>
      <ThemeToggle />
      <div className="border-4 border-gray-400  w-full p-5 m-5 rounded-xl">
        <h3 className="text-center text-[30px] font-bold mb-3">Sizes</h3>
        <ButtonUi variant="primary" size={"xs"}>
          XS Size
        </ButtonUi>
        <ButtonUi variant="primary" size={"sm"}>
          SM Size
        </ButtonUi>
        <ButtonUi variant="primary" size={"base"}>
          Base Size
        </ButtonUi>
        <ButtonUi variant="primary" size={"lg"}>
          Large Size
        </ButtonUi>
        <hr className="mt-5" />
        <h3 className="text-center text-[30px] font-bold m-3">Variants</h3>
        <ButtonUi variant="primary">SOLID </ButtonUi>
        <ButtonUi variant="destructive">DESTRUCTIVE</ButtonUi>
        <ButtonUi variant="secondary">SECONDARY</ButtonUi>
        <ButtonUi variant="outline">OUTLINE</ButtonUi>
        <ButtonUi variant="ghost">GHOST</ButtonUi>
        <ButtonUi variant="link">LINK</ButtonUi>
      </div>
      <div className="w-full p-5">
        <ButtonUi variant="secondary">normal width</ButtonUi>
        <ButtonUi variant="secondary" fullWidth>
          full width
        </ButtonUi>
      </div>
    </div>
  );
}
