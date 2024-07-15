/* eslint-disable react/no-unescaped-entities */
import { FaDatabase, FaMobileAlt, FaRegLightbulb } from "react-icons/fa";
import { FaEarthAfrica } from "react-icons/fa6";

const About = () => {
  const items = [
    {
      id: 1,
      title: "Graphic Design",
      color: "#2c98f0",
      icon: <FaRegLightbulb />,
    },
    {
      id: 2,
      title: "Web Design",
      color: "#ec5453",
      icon: <FaEarthAfrica />,
    },
    {
      id: 3,
      title: "Software",
      color: "#f9bf3f",
      icon: <FaDatabase />,
    },
    {
      id: 4,
      title: "Application",
      color: "#a84cb8",
      icon: <FaMobileAlt />,
    },
  ];

  return (
    <div className="h-[100vh] col-span-12 lg:col-span-10 flex flex-col justify-start ps-24 py-24 gap-8">
      <span className="uppercase text-[12px] tracking-5 text-primaryWhite-500">
        about us
      </span>
      <h3 className="tracking-5 text-xl font-semibold">WHO AM I?</h3>
      <p className="text-primaryWhithe-500 text-[16px] leading-relaxed lg:w-[80%] me-2 lg:me-0">
        <span className="text-black font-semibold"> Hi, I'm Jackson Ford</span>{" "}
        On her way she met a copy. The copy warned the Little Blind Text that
        where it came from it would have been rewritten a thousand times and
        everything that was left from its origin would be the word "and" and the
        Little Blind Text should turn around and return to its own, safe
        country.
      </p>
      <p className="text-primaryWhithe-500 text-[16px] leading-relaxed lg:w-[80%] me-2 lg:me-0">
        Even the all-powerful Pointing has no control about the blind texts; it
        is an almost unorthographic life. One day, however, a small line of
        blind text by the name of Lorem Ipsum decided to leave for the far World
        of Grammar.
      </p>
      <div className="w-full pe-4 lg:pe-[10rem]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            className="shadow-xl py-8 ps-2 lg:ps-4 flex flex-col items-start justify-center gap-5 "
            key={item.id}
            style={{ borderColor: item.color, borderWidth: "0 0 2px 0" }}
          >
            <div className="text-3xl" style={{ color: item.color }}>
              {item.icon}
            </div>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
