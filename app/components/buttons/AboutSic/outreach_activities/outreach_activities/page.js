"use client";
import React, { useState, useEffect } from "react";
import Row from "./component/row";
import Row1 from "./jd/row";

const about = [
  {
    id: 1,
    date: "March 6, 2024",
    first: "Dr. A D Giddings visit.",
    second:
      "Dr. Giddings has a Doctoral degree in semiconductor spintronics from the University of Nottingham. He is a member of the Institute of Physics (IOP) and a Fellow of the Royal Society of Arts, Manufactures and Commerce (RSA).",
    third:
      "Team SIC Organized a session about “Atom Prob Tomography and Its Application.”",
    image:
      "https://sic.iiti.ac.in/wp-content/uploads/2024/03/image_123650291-1-1536x855.jpg",
  },
  {
    id: 2,
    date: "February 17, 2024",
    first: "The 15th Foundation Day",
    second: "was marked by a visit from students of KV Dewas School.",
    third: "As a part of the Institute’s “Ek Bharat Shrestha Bharat Abhiyan.”",
    image:
      "https://sic.iiti.ac.in/wp-content/uploads/2024/02/IMG_3467-1536x864.jpg",
  },
  {
    id: 3,
    date: "August 18, 2023",
    first: "Delhi Public School ",
    second: "Students Visit.",
    third: "As a part of the Institute’s “Ek Bharat Shrestha Bharat Abhiyan.”",
    image: "https://sic.iiti.ac.in/wp-content/uploads/2023/08/DPS-1536x924.jpg",
  },
  {
    id: 4,
    date: "July 17, 2023",
    first: "Prof. Dr. Volker Epping and His Team Visit.",
    second:
      "Prof. Dr. Volker Epping is the President of Leibniz Universität Hannover (since 2015).",
    third:
      "He is also the Vice President of the university alliance TU9 and deputy spokesman for the universities in the German Rectors’ Conference.",
    image:
      "https://sic.iiti.ac.in/wp-content/uploads/2023/07/IMG-1922-1536x715.jpg",
  },
  {
    id: 5,
    date: "April 13, 2023",
    first: "Dr. A D Giddings visit.",
    second:
      "Dr. Giddings has a Doctoral degree in semiconductor spintronics from the University of Nottingham. He is a member of the Institute of Physics (IOP) and a Fellow of the Royal Society of Arts, Manufactures and Commerce (RSA).",
    third:
      "Dr. Giddings has a Doctoral degree in semiconductor spintronics from the University of Nottingham. He is a member of the Institute of Physics (IOP) and a Fellow of the Royal Society of Arts, Manufactures and Commerce (RSA).",
    image:
      "https://sic.iiti.ac.in/wp-content/uploads/2023/04/IMG-1306-1536x864.jpg",
  },
  {
    id: 6,
    date: "February 13, 2023",
    first: "Farewell to SIC staff.",
    second: "Mr. Saroj Mallik (EEE) and Ms. Mitali Dave (JTA)",
    third: "",
    image: "https://sic.iiti.ac.in/wp-content/uploads/2023/02/1b-1536x864.jpg",
  },
  {
    id: 7,
    date: "February 13, 2023",
    first: "Choitram School Indore",
    second: "Visit.",
    third: "As a part of the Institute’s “Ek Bharat Shresht Bharat Abhiyan,”",
    image:
      "https://sic.iiti.ac.in/wp-content/uploads/2023/02/1a-e1708168162500-1536x813.jpg",
  },
  {
    id: 8,
    date: "December 22, 2022",
    first: "Mr. H. E. Ming and team visit.",
    second: "Consulate-General Singapore, Embassy India",
    third: "Showcasing SIC facility for future collaboration",
    image:
      "https://sic.iiti.ac.in/wp-content/uploads/2023/02/WhatsApp-Image-2022-09-29-at-1.05.00-PM.jpeg",
  },
  {
    id: 9,
    date: "November 12, 2022",
    first: "Educational tour.",
    second:
      "Students of JNV Ghattiya, Ujjain, visit as “Ek Bharat Shresht Bharat Abhiyan,”",
    third: "",
    image:
      "https://sic.iiti.ac.in/wp-content/uploads/2023/02/WhatsApp-Image-2022-09-01-at-5.25.26-PM-1.jpeg",
  },
  {
    id: 10,
    date: "October 13, 20224",
    first: "Dr. G.S. Grover visit.",
    second: "Task Group Chair, IUPAC Safety Training Program, India ",
    third: "Visit on Laboratory Safety Management",
    image: "https://sic.iiti.ac.in/wp-content/uploads/2023/02/111-1536x853.jpg",
  },
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
        Outreach Activities For School and College Students
      </h1>
      <h2 className="mb-10 text-center text-xl">@IIT Indore</h2>
      <h4 className="mb-10 text-center text-xl">
        To create awareness of recent developments in Science and Technology and
        the applications of sophisticated instruments in basic and applied
        research.
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
                date={item.date}
                first={item.first}
                second={item.second}
                third={item.third}
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
