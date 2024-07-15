const Skills = () => {
  const items = [
    {
      id: 1,
      title: "Photoshop",
      color: "#2c98f0",
      percentage: 75,
    },
    {
      id: 2,
      title: "jQuery",
      color: "#ec5453",
      percentage: 60,
    },
    {
      id: 3,
      title: "HTML5",
      color: "#f9bf3f",
      percentage: 85,
    },
    {
      id: 4,
      title: "CSS3",
      color: "#a84cb8",
      percentage: 90,
    },
    {
      id: 5,
      title: "WordPress",
      color: "#5cb85c",
      percentage: 70,
    },
    {
      id: 6,
      title: "SEO",
      color: "#337ab7",
      percentage: 80,
    },
  ];

  return (
    <div className="h-[100vh] col-span-12 lg:col-span-10  px-8 py-[8rem] lg:py-[11rem]">
      <div className="w-[80%] mx-auto flex flex-col justify-start gap-8">
        <span className="uppercase text-[12px] tracking-5 text-primaryWhite-500">
          MY SPECIALTY
        </span>
        <h3 className="tracking-5 text-xl font-semibold uppercase">Skills</h3>
        <p className="text-primaryWhithe-500 text-[16px] leading-relaxed lg:w-[80%] me-2 lg:me-0">
          The Big Oxmox advised her not to do so, because there were thousands
          of bad Commas, wild Question Marks and devious Semikoli, but the
          Little Blind Text didn’t listen. She packed her seven versalia, put
          her initial into the belt and made herself on the way.
        </p>
        <div className=" lg:pe-24 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {items.map((item) => (
            <div
              className="flex flex-col items-start justify-center relative mb-6"
              key={item.id}
            >
              <p className="mb-2">{item.title}</p>
              <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700 relative">
                <div
                  className="h-1.5 rounded-full"
                  style={{
                    width: `${item.percentage}%`,
                    backgroundColor: item.color,
                  }}
                ></div>
                <span
                  className="absolute text-sm text-gray-600 -top-6"
                  style={{
                    left: `calc(${item.percentage}% - 10px)`,
                    color: `${item.color}`,
                  }} // Adjust -10px to center the text above the bar
                >
                  {item.percentage}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
