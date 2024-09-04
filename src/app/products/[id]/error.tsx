"use client";

const errorPage = () => {
  return (
    <div className=" flex justify-center items-center h-screen">
      <div className="h-[400px] flex justify-center items-center bg-red-600 rounded-md p-5 mx-auto w-[400px] text-center">
        <h1 className="text-3xl font-bold text-black mb-4">
          Something Wrong MFker
        </h1>
      </div>
    </div>
  );
};

export default errorPage;
