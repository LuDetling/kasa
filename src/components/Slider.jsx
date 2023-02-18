import styled from "styled-components";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const ContentSlider = styled.div`
  border-radius: 10px;
  img {
    height: 255px;
    width: 100%;
    object-fit: cover;
    @media screen and (min-width: 800px) {
      height: 415px;
    }
  }
`;

export default function Slider(props) {
  return (
    <ContentSlider id="slider">
      <Slide>
        {props.srcImg.map((picture, index) => (
          <img key={index} src={picture} alt="" />
        ))}
      </Slide>
    </ContentSlider>
  );
}
