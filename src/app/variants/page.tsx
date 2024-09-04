import ButtonUi from "@/components/ui/Button";
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
        <ButtonUi variant="primary">SOLID </ButtonUi>
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
      </div>
    </div>
  );
};

export default page;
