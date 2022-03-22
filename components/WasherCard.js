import Link from "next/link";
import React from "react";
// import Image from "next/image";
export const WasherCard = () => {
  return (
    <Link href={"/"}>
      <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto cursor-pointer ">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6  rounded-lg bg-blueGray-700 shadow-xl">
          <div>
            {/* <Image
              src="/img/Washer.png"
              layout="fill"
              className="w-full align-middle rounded-t-lg"
            /> */}
            <img
              alt="..."
              src="/img/Washer.png"
              className="w-full align-middle rounded-t-lg"
            />
            <blockquote className="relative p-8 mb-4">
              <svg
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 583 95"
                className="absolute left-0 w-full block h-95-px -top-94-px"
              >
                <polygon
                  points="-30,95 583,95 583,65"
                  className="text-blueGray-700 fill-current"
                ></polygon>
              </svg>
              <h4 className="text-xl font-bold text-white">
                Угаалгын газрын нэр
              </h4>
              <p className="text-md font-light mt-2 text-white">
                Мэргэжлийн авто угаалгын үйлчилгээг тохь тухтай орчинд хүргэхийг
                зорин ажилладаг. Төмөр хүлэгтээ хайртай хүн бүрт
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </Link>
  );
};
