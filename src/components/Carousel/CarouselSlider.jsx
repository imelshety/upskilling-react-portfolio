import { FaDownload } from "react-icons/fa";
import { RiShoppingBag4Fill } from "react-icons/ri";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1440 },
    items: 1,
  },
  labtop: {
    breakpoint: { max: 1440, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 767 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
  },
};

export function CarouselSlider() {
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={1800}
      removeArrowOnDeviceType={[
        "tablet",
        "mobile",
        "labtop",
        "desktop",
        "superLargeDesktop",
      ]}
    >
      <div
        className="w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('../../assets/slider1.jpg')" }}
      >
        <div className="w-full h-full ps-20 lg:ps-48 flex flex-col justify-center items-start gap-5">
          <h1 className="text-6xl font-bold">
            Hi!
            <br /> Im Jackson
          </h1>
          <p>
            100% html5 bootstrap templates Made <br /> By{" "}
            <span className="text-mainBlue-600">Colorlib.com</span>
          </p>
          <button className="flex gap-2 justify-center items-center p-4 border-2 border-mainBlue-300 rounded uppercase">
            Download Cv <FaDownload className="text-mainBlue-600 text-xl" />{" "}
          </button>
        </div>
      </div>
      <div
        className="w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('../../assets/slider2.jpg')" }}
      >
        <div className="w-full h-full ps-20 lg:ps-48 flex flex-col justify-center items-start gap-5">
          <h1 className="text-6xl font-bold">
            I am
            <br /> Designer
          </h1>
          <p>
            100% html5 bootstrap templates Made <br /> By{" "}
            <span className="text-mainBlue-600">Colorlib.com</span>
          </p>
          <button className="flex gap-2 justify-center items-center p-4 border-2 border-mainBlue-300 rounded uppercase">
            Fiew Portfolio{" "}
            <RiShoppingBag4Fill className="text-mainBlue-600 text-xl" />{" "}
          </button>
        </div>
      </div>
    </Carousel>
  );
}
export default CarouselSlider;
