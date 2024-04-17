"use client";
import { useEffect, useRef, useState } from "react";

const Gallery = () => {
  const slideGalleryRef = useRef(null);
  const scrollbarThumbRef = useRef(null);
  const [slideCount, setSlideCount] = useState(0);
  const slideHeight = 720;
  const marginTop = 16;

  useEffect(() => {
    const slideGallery = slideGalleryRef.current;
    const slides = Array.from(slideGallery.querySelectorAll(".slides > div"));
    const thumbnails = slides.map((slide, i) => (
      <img
        key={i}
        src={slide.querySelector("img").src}
        data-id={i}
        onClick={() => scrollToElement(i)}
        className="w-16 h-16 cursor-pointer"
      />
    ));
    setSlideCount(slides.length);
    scrollThumb();
    return () => {
      // Cleanup
    };
  }, []);

  const scrollToElement = (index) => {
    slideGalleryRef.current.scrollTo(0, index * slideHeight + marginTop);
  };

  const scrollThumb = () => {
    const slideGallery = slideGalleryRef.current;
    const index = Math.floor(slideGallery.scrollTop / slideHeight);
    // scrollbarThumbRef.current.style.height = `${((index + 1) / slideCount) * slideHeight}px`;
  };

  return (
    <div className="gallery-container flex justify-center">
      <div className="thumbnails flex flex-col gap-2">
        {/* Thumbnails will be added here */}
      </div>
      {/* <div
        className="scrollbar h-80 w-1 bg-gray-300 block ml-2"
        ref={scrollbarThumbRef}
      ></div> */}
      <div
        className="slides grid grid-rows-auto gap-4 w-[calc(540px + 1rem)] px-1 h-80 overflow-y-auto overscroll-y-contain"
        ref={slideGalleryRef}
        onScroll={scrollThumb}
      >
        <div>
          <img src="https://picsum.photos/id/1067/540/720" alt="slide" />
        </div>
        <div>
          <img src="https://picsum.photos/id/122/540/720" alt="slide" />
        </div>
        <div>
          <img src="https://picsum.photos/id/188/540/720" alt="slide" />
        </div>
        <div>
          <img src="https://picsum.photos/id/249/540/720" alt="slide" />
        </div>
        <div>
          <img src="https://picsum.photos/id/257/540/720" alt="slide" />
        </div>
        <div>
          <img src="https://picsum.photos/id/259/540/720" alt="slide" />
        </div>
        <div>
          <img src="https://picsum.photos/id/283/540/720" alt="slide" />
        </div>
        <div>
          <img src="https://picsum.photos/id/288/540/720" alt="slide" />
        </div>
        <div>
          <img src="https://picsum.photos/id/299/540/720" alt="slide" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
