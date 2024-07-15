import Tab from "../../components/Tab/Tab";

const Work = () => {
  

  return (
    <div className=" bg-white col-span-12 lg:col-span-10  px-8 py-[8rem] lg:py-[11rem]">
      <div className="w-[80%] mx-auto flex flex-col justify-start gap-8">
        <span className="uppercase text-[12px] tracking-5 text-primaryWhite-500">
        MY WORK
        </span>
        <h3 className="tracking-5 text-xl text-black font-semibold uppercase">RECENT WORK</h3>
        {/* <div className=" lg:pe-24 grid grid-cols-1 lg:grid-cols-2 gap-6"> */}
         <Tab/>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Work;
