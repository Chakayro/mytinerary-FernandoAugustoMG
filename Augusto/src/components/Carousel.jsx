import React, { useEffect, useState } from "react";
import Argentina from "../assets/img-ar.jpg";
import Colombia from "../assets/img-co.jpg";
import Mexico from "../assets/img-mx.jpg";
import UnitedKingdom from "../assets/img-uk.jpg";
import Egypt from "../assets/img-eg.webp";
import India from "../assets/img-in.jpg";
import Japan from "../assets/img-jp.jpg";
import Korea from "../assets/img-kr.jpg";
import Turkey from "../assets/img-tk.jpg";
import China from "../assets/img-ch.jpg";
import Russia from "../assets/img-ru.webp";
import Canada from "../assets/img-ca.jpg";

const carouselData = [
  { src: Argentina, title: "Argentina" },
  { src: Colombia, title: "Colombia" },
  { src: Mexico, title: "Mexico" },
  { src: UnitedKingdom, title: "United Kingdom" },
  { src: Egypt, title: "Egypt" },
  { src: India, title: "India" },
  { src: Japan, title: "Japan" },
  { src: Korea, title: "Korea" },
  { src: Turkey, title: "Turkey" },
  { src: China, title: "China" },
  { src: Russia, title: "Russia" },
  { src: Canada, title: "Canada" },
];

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [numItems, setNumItems] = useState(4);

  useEffect(() => {
    const updateNumItems = () => {
      if (window.innerWidth < 768) {
        setNumItems(1);
      } else if (window.innerWidth < 1024) {
        setNumItems(2);
      } else if (window.innerWidth < 1224) {
        setNumItems(3);
      } else {
        setNumItems(4);
      }
    };

    updateNumItems();
    window.addEventListener("resize", updateNumItems);

    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev < carouselData.length - numItems ? prev + numItems : 0
      );
    }, 5000);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", updateNumItems);
    };
  }, [numItems]);

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev < carouselData.length - numItems ? prev + numItems : 0
    );
  };

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev > 0 ? prev - numItems : carouselData.length - numItems
    );
  };

  return (
    <>
      <div className="absolute bottom-0 h-1/5 end-0  lg:w-10/12 md:w-9/12 w-7/12 xs:w-auto flex">
        <div className="flex flex-col h-full">
          <div className="h-1/2 w-11 bg-neutral-300/45 flex items-center justify-center backdrop-blur-sm">
            <button onClick={handleNext} className="text-4xl">
              &gt;
            </button>
          </div>
          <div className="h-1/2 w-11 bg-neutral-300/45 flex items-center justify-center backdrop-blur-sm">
            <button onClick={handlePrev} className="text-4xl">
              &lt;
            </button>
          </div>
        </div>
        <div className="bg-neutral-500/30 flex items-center justify-center backdrop-blur-sm w-full">
          <div className="absolute -top-14 w-full flex justify-center">
            <h2 className=" lg:text-4xl md:text-2xl text-black md:font-bold font-mono text-lg">
              Popular Mytineraries
            </h2>
          </div>
          {carouselData
            .slice(activeIndex, activeIndex + numItems)
            .map((image, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-full h-full"
                style={{ width: `${100 / numItems}%` }}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="object-cover w-full h-full p-3"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="absolute bottom-4 text-black font-mono font-bold bg-white/60 p-1">
                    {image.title}
                  </h3>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Carousel;
