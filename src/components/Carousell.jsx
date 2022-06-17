import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import s from "./css/Carousell.module.css"
import {
  CarouselControl,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";

function Carousell() {
  // State for Active index
  const [activeIndex, setActiveIndex] = React.useState(0);

  // State for Animation
  const [animating, setAnimating] = React.useState(false);

  // Sample items for Carousel
  const items = [
    {
      src: require("./img/basico-de-javascript.png"),
    },
    {
      src: require("./img/cdd-lauyao.png"),
    },
    {
      src: require("./img/css-grid-basico.png"),
    },
    {
      src: require("./img/definitivo.png"),
    },
    {
      src: require("./img/fundamentosdesot.png"),
    },
    {
      src: require("./img/htmlycss.png"),
    },
    { src: require("./img/maquetacione.png") },
    { src: require("./img/prewor.png") },
    { src: require("./img/programacione-estructurada.png")},
    { src: require("./img/programacionOrientada.png")},
    { src: require("./img/seguridad-informatica.png")},
    { src: require("./img/seguridad.png")},
    { src: require("./img/Sin título.png")}
  ];

  // Items array length
  const itemLength = items.length - 1;

  // Previous button for Carousel
  const previousButton = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? itemLength : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  // Next button for Carousel
  const nextButton = () => {
    if (animating) return;
    const nextIndex = activeIndex === itemLength ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  // Carousel Item Data
  const carouselItemData = items.map((item) => {
    return (
      <CarouselItem
        key={item.src}
        onExited={() => setAnimating(false)}
        onExiting={() => setAnimating(true)}
      >
        <img src={item.src} alt={item.altText} className={s.img} />
      </CarouselItem>
    );
  });

  return (
    <div>
      <h1 className={s.tituCa}>Certificados</h1>
      <Carousel
        previous={previousButton}
        next={nextButton}
        activeIndex={activeIndex}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={(newIndex) => {
            if (animating) return;
            setActiveIndex(newIndex);
          }}
        />
        {carouselItemData}
        <CarouselControl
        className={s.next}
          directionText="Prev"
          direction="prev"
         onClickHandler={previousButton}
        />
        <CarouselControl
          directionText="Next"
          direction="next"
          onClickHandler={nextButton}
        />
      </Carousel>
    </div>
  );
}

export default Carousell;
