import React, { useState, useRef } from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Button from "components/global/Button";
import Text from "components/global/Text";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PageContainer from "components/global/PageContainer";

const StyledBlockContainer = styled(PageContainer)`
  border-top: solid ${(props) => props.theme.colors.black} 1px;
  padding-top: 15px;
  padding-bottom: 65px;
  .btn-container {
    display: flex;
    gap: 15px;
    margin-top: 15px;
  }
  @media ${(props) => props.theme.minWidth.md} {
    padding-top: 25px;
    padding-right: 0;
  }
`;

const StyledSlider = styled(Slider)`
  margin-bottom: 15px;
  overflow: hidden;
  @media ${(props) => props.theme.minWidth.md} {
    margin-bottom: 25px;
  }
  .carousel-item {
    width: 100%;
    margin: 0 auto;
    @media ${(props) => props.theme.minWidth.md} {
      margin-right: 25px;
      cursor: grab;
      &:active {
        cursor: grabbing;
      }
    }
  }
  .carousel-image {
    height: 50vh;
    @media ${(props) => props.theme.minWidth.md} {
      height: 600px;
      max-height: calc(100vh - 180px);
    }
  }
`;

const ProjectCarousel = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(1);
  const sliderRef = useRef();

  const handleImageChange = (oldIndex, newIndex) => {
    setImageIndex(newIndex + 1);
  };
  const settings = {
    infinite: true,
    slidesToShow: 1.2,
    slidesToScroll: 1,
    initialSlide: 0,
    variableWidth: true,
    beforeChange: (oldIndex, newIndex) => {
      handleImageChange(oldIndex, newIndex);
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          variableWidth: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <StyledBlockContainer>
      <StyledSlider {...settings} ref={sliderRef}>
        {images.map(({ image }) => {
          const getGatsbyImage = getImage(image.asset);
          return (
            <div key={image.asset} className="carousel-item">
              <GatsbyImage
                className="carousel-image"
                image={getGatsbyImage}
                alt="Image à faire défiler"
              />
            </div>
          );
        })}
      </StyledSlider>
      <Text type="label">
        Image 0{imageIndex}/0{images.length}
      </Text>
      <div className="btn-container">
        <Button prev onClick={() => sliderRef.current.slickPrev()}></Button>
        <Button next onClick={() => sliderRef.current.slickNext()}></Button>
      </div>
    </StyledBlockContainer>
  );
};

export default ProjectCarousel;
