import { useState } from "react";
import { Link } from "react-router-dom";

const SliderLg = () => {
    const items = [
        "HOME",
        "ABOUT",
        "SKILLS",
        "EXPERIENCE",
        "WORK"
      ];
      const [activeItem, setActiveItem] = useState("HOME");
  return (
    <aside className="hidden  lg:flex lg:col-start-1 lg:col-end-3 min-h-full	 bg-primaryWhithe-50">
    <div className="w-full h-screen flex flex-col justify-center items-center gap-6">
      <div className="w-[150px] h-[150px] flex justify-content-center rounded-full">
        <img
          src="/assets/logo.jpg"
          alt="logo-img"
          className="max-w-full rounded-full"
        />
      </div>
      <h1 className="text-2xl font-semibold">Jackson Ford</h1>
      <p className="text-sm text-[#000000b3] text-center">
        <span className="text-mainBlue-600">UI/UX/DESIGNER </span> IN PHILIPPINES
      </p>
      <ul className="flex flex-col gap-4 justify-center items-center">
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
  </aside>
  )
}

export default SliderLg