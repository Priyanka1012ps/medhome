import React from "react";
import { UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src:
      "https://imagizer.imageshack.com/img923/2587/GzgVAE.jpg",

    key: "1",
  },
  {
    src:
      "https://imagizer.imageshack.com/img924/8634/1ql2qJ.jpg",

    key: "2",
  },
  {
    src:
      "https://imagizer.imageshack.com/img924/3213/Li6dI4.jpg",
  
    key: "3",
  },
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;




/*
import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import "./Carousel.css";
const items = [
  {
    src:
      "https://images.ctfassets.net/rporu91m20dc/1eqiJ8nGs0sJcPwl92eqjc/5fc75a0474ee2c81efab3e42221c2199/fallout-76-hero-img?q=70&fm=webp",
    altText: "Slide 1",
    caption: "Slide 1",
    header: "Slide 1 Header",
    key: "1",
  },
  {
    src:
      "https://images.ctfassets.net/rporu91m20dc/5aPw1eUd6J5g49XbwxXKmb/fc396b6f4f60437fa2e5e4ca9083a05c/the-elder-scrolls--online--greymoor-hero-img?q=70&fm=webp",
    altText: "Slide 2",
    caption: "Slide 2",
    header: "Slide 2 Header",
    key: "2",
  },
  {
    src:
      "https://images.ctfassets.net/rporu91m20dc/4fyPIj2zpEPPazHhMiaJ5M/c1093faf3ed923225169dd3b7b78d74b/prey-hero-img?q=70&fm=webp",
    altText: "Slide 3",
    caption: "Slide 3",
    header: "Slide 3 Header",
    key: "3",
  },
];

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className='carImg' />
        <CarouselCaption
          // captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction='prev'
        directionText='Previous'
        onClickHandler={previous}
      />
      <CarouselControl
        direction='next'
        directionText='Next'
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default Example;
*/
