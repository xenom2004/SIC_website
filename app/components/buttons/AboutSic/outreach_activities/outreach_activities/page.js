"use client";
import React, { useState, useEffect } from "react";
import Row from "./component/row";
import Row1 from "./jd/row";
import { useTranslation } from "../../../../../TranslationalContext";


const about = [

  
    {
      id: 1,
      date: "temp134",
      first: "temp135",
      second: "temp136",
      third: "temp137",
      image: "https://sic.iiti.ac.in/wp-content/uploads/2024/03/image_123650291-1-1536x855.jpg",
    },
    {
      id: 2,
      date: "temp138",
      first: "temp139",
      second: "temp140",
      third: "temp141",
      image: "https://sic.iiti.ac.in/wp-content/uploads/2024/02/IMG_3467-1536x864.jpg",
    },
    {
      id: 3,
      date: "temp142",
      first: "temp143",
      second: "temp144",
      third: "temp145",
      image: "https://sic.iiti.ac.in/wp-content/uploads/2023/08/DPS-1536x924.jpg",
    },
    {
      id: 4,
      date: "temp146",
      first: "temp147",
      second: "temp148",
      third: "temp149",
      image: "https://sic.iiti.ac.in/wp-content/uploads/2023/07/IMG-1922-1536x715.jpg",
    },
    {
      id: 5,
      date: "temp150",
      first: "temp151",
      second: "temp152",
      third: "temp153",
      image: "https://sic.iiti.ac.in/wp-content/uploads/2023/04/IMG-1306-1536x864.jpg",
    },
    {
      id: 6,
      date: "temp154",
      first: "temp155",
      second: "temp156",
      third: "temp157",
      image: "https://sic.iiti.ac.in/wp-content/uploads/2023/02/1b-1536x864.jpg",
    },
    {
      id: 7,
      date: "temp158",
      first: "temp159",
      second: "temp160",
      third: "temp161",
      image: "https://sic.iiti.ac.in/wp-content/uploads/2023/02/1a-e1708168162500-1536x813.jpg",
    },
    {
      id: 8,
      date: "temp162",
      first: "temp163",
      second: "temp164",
      third: "temp165",
      image: "https://sic.iiti.ac.in/wp-content/uploads/2023/02/WhatsApp-Image-2022-09-29-at-1.05.00-PM.jpeg",
    },
    {
      id: 9,
      date: "temp166",
      first: "temp167",
      second: "temp168",
      third: "temp169",
      image: "https://sic.iiti.ac.in/wp-content/uploads/2023/02/WhatsApp-Image-2022-09-01-at-5.25.26-PM-1.jpeg",
    },
    {
      id: 10,
      date: "temp170",
      first: "temp171",
      second: "temp172",
      third: "temp173",
      image: "https://sic.iiti.ac.in/wp-content/uploads/2023/02/111-1536x853.jpg",
    }

  

];
const fact = [
  {
    id: 1,
    image: "https://sic.iiti.ac.in/wp-content/uploads/2023/02/111-1536x853.jpg",
  },
  {
    id: 2,
    image:
      "https://sic.iiti.ac.in/wp-content/uploads/2023/02/WhatsApp-Image-2022-09-01-at-5.25.26-PM-1.jpeg",
  },
];

const Page = () => {
  const { translate, setLanguage } = useTranslation();
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      moveSlide(1);
    }, 2000);

    return () => clearInterval(interval);
  }, [slideIndex]);

  function moveSlide(moveStep) {
    showSlide(slideIndex + moveStep);
  }

  function currentSlide(n) {
    showSlide(n);
  }

  function showSlide(n) {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    let newIndex = n;

    if (n > slides.length) {
      newIndex = 1;
    } else if (n < 1) {
      newIndex = slides.length;
    }

    setSlideIndex(newIndex);

    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.add("hidden");
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("bg-yellow-500");
      dots[i].classList.add("bg-green-600");
    }

    slides[newIndex - 1]?.classList.remove("hidden");
    dots[newIndex - 1]?.classList.remove("bg-green-600");
    dots[newIndex - 1]?.classList.add("bg-yellow-500");
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="my-4 text-center text-4xl">
        {translate("temp174")}
      </h1>
      <h2 className="mb-10 text-center text-xl"> {translate("temp175")}</h2>
      <h4 className="mb-10 text-center text-xl">
      {translate("temp176")}
      
      </h4>

      <div className="relative w-full max-w-[600px] mx-auto">
        {fact.map((item) => (
          <Row1 key={item.id} image={item.image} />
        ))}
      </div>
      <br />

      <a
        className="absolute left-0 top-1/2 p-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white hover:text-amber-500 mt-24 cursor-pointer"
        onClick={() => moveSlide(-1)}
      >
        ❮
      </a>
      <a
        className="absolute right-0 top-1/2 p-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white hover:text-amber-500 mt-24 cursor-pointer"
        onClick={() => moveSlide(1)}
      >
        ❯
      </a>

      <div className="flex justify-center items-center space-x-5">
        {[...Array(fact.length)].map((_, index) => (
          <div
            key={index}
            className={`dot w-4 h-4 rounded-full cursor-pointer ${slideIndex === index + 1 ? "bg-yellow-500" : "bg-green-600"}`}
            onClick={() => currentSlide(index + 1)}
          ></div>
        ))}
      </div>

      <div className="container  px-4 py-8 mx-auto items-center">
        <div className="flex  flex-wrap">
          {about.map((item) => (
            <>
              {/* {console.log(item.id)} */}
              <Row
                key={item.id}
                dis={item.id}
                date={translate(item.date)}
                first={translate(item.first)}
                second={translate(item.second)}
                third={translate(item.third)}
                image={item.image}
              />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
