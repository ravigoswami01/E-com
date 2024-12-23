import React from "react";
import Slider from "react-slick";
import image1 from "../../assets/Mood/image1.jpeg";
import image2 from "../../assets/Mood/image2.jpeg";
import image3 from "../../assets/Mood/image3.png";

const MainData = [
  {
    id: 1,
    img: image1,
    subtitle: "lenovo",
    title: "thinkpad ",
    title2: "aptop",
    dis: "Lenovo's official site for press materials and original stories about the vision and passion behind the technology.",
  },
  {
    id: 2,
    img: image2,
    subtitle: "lenovo",
    title: "thinkpad ",
    title2: "aptop",
    dis: "Lenovo's official site for press materials and original stories about the vision and passion behind the technology.",
  },
  {
    id: 3,
    img: image3,
    subtitle: "lenovo",
    title: "thinkpad ",
    title2: "aptop",
    dis: "Lenovo's official site for press materials and original stories about the vision and passion behind the technology.",
  },
];
const Main = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div className="container">
      <div className="overflow-hidden rounded-3xl min-h-[555px] sm:min-h-[650px]
          .main-bg-color">
        <div className="container pb-8 sm:pb-0">
        {/*main section */}
        <Slider {...settings}>
          {MainData.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/*text contant section */}
                  <div>
                    <h1>{data.subtitle}</h1>
                    <h1>{data.title}</h1>
                    <h1>{data.title2}</h1>
                    <div>
                      <button>Shop Now</button>
                    </div>
                  </div>
                {/*img section */}
                <div>
                  <div>
                    <img src={data.img} alt=""
                    className="w-[300px] h-[300px] sm:h-[450px]  sm:scale-105 lg:scale-110
                    object-contain mx-auto drop-shadow-[-8px 4px 6px rgba(0,0,0,.4)]"/>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        </div>
      </div>
    </div>
  );
};

export default Main;
