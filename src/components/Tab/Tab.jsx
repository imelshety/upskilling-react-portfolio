import { useState } from "react";

const Tab = () => {
  const cards = [
    {
      id: 1,
      title: "work1",
      srcImage: "/assets/work1.jpg",
      desc: "description-work1",
    },
    {
      id: 2,
      title: "work2",
      srcImage: "/assets/work2.jpg",
      desc: "description-work2",
    },
    {
      id: 3,
      title: "work3",
      srcImage: "/assets/work3.jpg",
      desc: "description-work3",
    },
    {
      id: 4,
      title: "work4",
      srcImage: "/assets/work4.jpg",
      desc: "description-work4",
    },
    {
      id: 5,
      title: "work5",
      srcImage: "/assets/work5.jpg",
      desc: "description-work5",
    },
    {
      id: 6,
      title: "work6",
      srcImage: "/assets/work6.jpg",
      desc: "description-work6",
    },
  ];
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };
  return (
    <div role="tablist" className="tabs tabs-lifted w-full h-full">
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab mx-4 bg-primaryWhithe-50 border-none rounded text-mainBlue-500 active:bg-mainBlue-50"
        aria-label="Graphic Design"
        defaultChecked
      />
      <div role="tabpanel" className="tab-content p-6">
        <div className="w-full h-full">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
            {cards.slice(0, showAll ? cards.length : 4).map((card) => (
              <div
                key={card.id}
                className="relative bg-cover bg-center h-[20rem] rounded"
                style={{ backgroundImage: `url(${card.srcImage})` }}
              >
                <div className="absolute inset-0 flex flex-col ps-4 items-start justify-start opacity-0 hover:opacity-100 duration-300 bg-[#337ab7] bg-opacity-75 rounded">
                  <h4 className="text-white text-lg font-bold underline ">
                    {card.title}
                  </h4>
                  <p className="text-white">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {!showAll && (
            <button
              className="mt-4 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
              onClick={toggleShowAll}
            >
              Show More
            </button>
          )}
        </div>
      </div>

      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab"
        aria-label="Software"
      />
      <div role="tabpanel" className="tab-content p-6">
        <div className="w-full h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cards
              .slice(0, showAll ? cards.length : 4)
              .reverse()
              .map((card) => (
                <div
                  key={card.id}
                  className="relative bg-cover bg-center h-[20rem] rounded"
                  style={{ backgroundImage: `url(${card.srcImage})` }}
                >
                  <div className="absolute inset-0 flex flex-col ps-4 items-start justify-start opacity-0 hover:opacity-100 duration-300 bg-[#337ab7] bg-opacity-75 rounded">
                  <h4 className="text-white text-lg font-bold underline ">
                    {card.title}
                  </h4>
                  <p className="text-white">{card.desc}</p>
                  </div>
                </div>
              ))}
          </div>
          {!showAll && (
            <button
              className="mt-4 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
              onClick={toggleShowAll}
            >
              Show More
            </button>
          )}
        </div>
      </div>

      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab"
        aria-label="All"
      />
      <div role="tabpanel" className="tab-content p-6">
        <div className="w-full h-full">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
            {cards.slice(0, showAll ? cards.length : 4).map((card) => (
              <div
                key={card.id}
                className="relative bg-cover bg-center h-[20rem] rounded"
                style={{ backgroundImage: `url(${card.srcImage})` }}
              >
                <div className="absolute inset-0 flex flex-col ps-4 items-start justify-start opacity-0 hover:opacity-100 duration-300 bg-[#337ab7] bg-opacity-75 rounded">
                <h4 className="text-white text-lg font-bold underline ">
                    {card.title}
                  </h4>
                  <p className="text-white">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {!showAll && (
            <button
              className="mt-4 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
              onClick={toggleShowAll}
            >
              Show More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tab;
