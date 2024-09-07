import ButtonUi, { buttonVariants } from "@/components/ui/Button";
import Link from "next/link";
import { FaRegSun } from "react-icons/fa";
const page = () => {
  return (
    <div className="p-5">
      {" "}
      <div className="border-4 border-gray-400  p-5 m-5 rounded-xl">
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
        <ButtonUi variant="primary" rounded="none">
          SOLID{" "}
        </ButtonUi>
        <ButtonUi variant="destructive">DESTRUCTIVE</ButtonUi>
        <ButtonUi variant="secondary">SECONDARY</ButtonUi>
        <ButtonUi variant="outline">OUTLINE</ButtonUi>
        <ButtonUi variant="ghost">GHOST</ButtonUi>
        <ButtonUi variant="link">LINK</ButtonUi>
        <hr className="mt-5" />
        <h3 className="text-center text-[30px] font-bold m-3 ">Width</h3>
        <div className="flex flex-col items-center">
          <ButtonUi variant="secondary">normal width</ButtonUi>
          <ButtonUi variant="secondary" fullWidth>
            full width
          </ButtonUi>
        </div>
        <hr className="mt-5" />
        <h3 className="text-center text-[30px] font-bold m-3 ">rounded</h3>
        <div className="flex flex-wrap items-center">
          <ButtonUi variant="secondary" rounded="none">
            rounded none
          </ButtonUi>
          <ButtonUi variant="secondary" rounded="sm">
            rounded sm
          </ButtonUi>
          <ButtonUi variant="secondary" rounded="md">
            rounded md
          </ButtonUi>
          <ButtonUi variant="secondary" rounded="lg">
            rounded lg
          </ButtonUi>
          <ButtonUi variant="secondary" rounded="full">
            rounded full
          </ButtonUi>
          <ButtonUi variant="secondary">rounded default</ButtonUi>
        </div>
        <hr className="mt-5" />
        <h3 className="text-center text-[30px] font-bold m-3 ">Icons</h3>
        <div className="flex flex-wrap items-center justify-around">
          <ButtonUi variant="secondary" startIcon={<FaRegSun />}>
            Start icon
          </ButtonUi>
          <ButtonUi variant="secondary" endIcon={<FaRegSun />} disabled>
            End icon
          </ButtonUi>
        </div>
      </div>
      <Link
        href="/products"
        className={buttonVariants({ variant: "destructive", fullWidth: true })}
      >
        I'm Just A Link
      </Link>
    </div>
  );
};

export default page;
