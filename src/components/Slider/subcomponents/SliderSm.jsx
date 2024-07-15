import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { HiBars3 } from "react-icons/hi2";
import { Link } from "react-router-dom";

const SliderSm = () => {
  const items = [
    "HOME",
    "ABOUT",
    "SKILLS",
    "EXPERIENCE",
    "WORK"
  ];
  const [active, setActive] = useState(false);
  const [activeItem, setActiveItem] = useState("HOME");

  return (
    <>
 <header
        className={`fixed lg:hidden bg-secondaryColor-50  top-0 left-0 right-0 flex justify-between p-3 z-50`}
      >
      
        {active ? (
          <button
            className="text-black-950 text-4xl"
            onClick={() => setActive(false)}
          >
            <AiFillCloseCircle />
          </button>
        ) : (
          <button
            className="text-black-950 text-4xl"
            onClick={() => setActive(true)}
          >
            <HiBars3 />
          </button>
        )}
      </header>
      <div
        className={`lg:hidden w-screen h-screen py-10 fixed z-[998] left-0 right-0 backdrop-blur-sm bg-white/80 duration-300 ${
          active ? "top-[50px]" : "-top-[120vh]"
        }`}
      >
        <ul className="flex flex-col gap-4 justify-center items-center">
          <li> <div className="w-20 h-20 flex justify-content-center rounded-full">
        <img
          src="/assets/logo.jpg"
          alt="logo-img"
          className="max-w-full rounded-full"
        />
      </div></li>
        {items.map((item) => (
         
         <Link to={item} key={item}>
         <li
         key={item}
         className={`text-sm font-normal pb-2 relative before:absolute before:content-[''] before:w-full before:h-[1px] before:bg-mainBlue-600 before:bottom-0 before:left-1/2 before:transform before:-translate-x-1/2 before:scale-x-0 before:origin-center before:transition-transform before:duration-300 hover:before:scale-x-100 cursor-pointer ${
           activeItem === item ? 'text-mainBlue-600' : ''
         }`}
         onClick={() => setActiveItem(item)}
       >
         {item}
       </li>
       </Link>
        ))}
      </ul>
      </div>
 </>
  )
}

export default SliderSm