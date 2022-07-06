import { Box, Image } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProgressCard from "./ProgressCard";
import { IProgress } from "../../types";
// import { Carousel } from "react-responsive-carousel/lib/js";
import { Carousel } from "react-responsive-carousel";

// interface IRenderIndicator {
//   onClickHandler: (e: React.MouseEvent | React.KeyboardEvent) => void;
//   isSelected: boolean;
//   index: number;
//   label: string;
// }

const ImageSlider = (props: { slides: IProgress[] }) => {
  return (
    <div>
      <Carousel
        showThumbs={false}
        emulateTouch={true}
        showArrows={false}
        showStatus={false}
        useKeyboardArrows={true}
        preventMovementUntilSwipeScrollTolerance
        swipeScrollTolerance={100}
      >
        {props.slides.map((slide, index) => (
          <ProgressCard
            key={index}
            timeType={slide.timeType}
            progress={slide.progress}
          ></ProgressCard>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageSlider;
