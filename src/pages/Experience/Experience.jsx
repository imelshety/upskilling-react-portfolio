import { FaPen } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Full Stack Developer",
      date: "2017 - 2018",
      color: "bg-[#2c98f0]",
      desc: "Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.",
    },
    {
      id: 2,
      title: "Front End Developer at Google Company ",
      date: "2017 - 2018",
      color: "bg-[#ec5453]",
      desc: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
    },
    {
      id: 2,
      title: "System Analyst ",
      date: "2017 - 2018",
      color: "bg-[#f9bf3f]",
      desc: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
    },
  ];

  return (
    <div className="h-[100vh] col-span-12 lg:col-span-10  px-8 py-[8rem] lg:py-[11rem]">
      <div className="w-full lg:w-[80%] lg:mx-auto flex flex-col justify-start gap-8">
        <span className="uppercase text-[12px] tracking-5 text-primaryWhite-500">
          EXPERIENCE
        </span>
        <h3 className="tracking-5 text-xl font-semibold uppercase">
          WORK EXPERIENCE
        </h3>

        <div className=" lg:pe-24 grid grid-cols-1 ps-5  gap-6">
          {experiences.map((item, index) => (
            <div
              className="bg-primaryWhithe-50 py-8 px-5 rounded flex flex-col gap-8 relative mb-8"
              key={item.id}
            >
              <span
                className={`w-8 lg:w-14 h-8 lg:h-14 rounded-full absolute -left-12 lg:-left-20 flex items-center justify-center z-10 ${
                  item.color
                } ${
                  index !== experiences.length - 1
                    ? "after:absolute after:content-[''] after:w-1 after:h-[200px] after:bg-red-500 after:left-1/2 after:top-full after:-translate-x-1/2"
                    : ""
                }`}
              >
                <FaPen className="text-base lg:text-2xl text-white" />
              </span>

              <h5 className="text-base lg:text-xl">
                {item.title}
                <span className="text-primaryWhithe-300 font-extrabold text-sm">
                  {item.date}
                </span>
              </h5>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
