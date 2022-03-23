import React from "react";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="bg-blue-500 h1-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
          <ul>
            <p className="text-gray-50 font-bold text-xl pb-5">Zulguur.mn</p>
            <div className="text-gray-50 flex text:xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
              Ut nulla eros, luctus eu accumsan eget, eleifend placerat dui.
            </div>
          </ul>
          <div className="p-5">
            <ul>
              <p className="text-gray-50 font-bold text-md pb-4">Zulguur.mn</p>
              <li className="text-gray-50 text-xs pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Бидний тухай
              </li>
              <li className="text-gray-50 text-xs pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Үйлчилгээ
              </li>
              <li className="text-gray-50 text-xs pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Түгээмэл асуултууд
              </li>
            </ul>
          </div>
          <div className="p-5">
            <ul>
              <p className="text-gray-50 font-bold text-md pb-4">
                Холбоо барих
              </p>
              <li className="text-gray-50 text-xs pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Утас: 99999999
              </li>
              <li className="text-gray-50 text-xs pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Имэйл: info@Zulguur.mn
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
