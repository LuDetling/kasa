import styled from "styled-components";
import colors from "../utils/style/colors";

const ContentLocation = styled.div`
  margin: 20px 0;
  font-family: "montserrat-medium";
  font-size: 18px;
  height: 255px;
  /* background-color: ${colors.primary}; */
  position: relative;
  border-radius: 10px;
  padding: 20px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  &::before {
    content: "";
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 0.5) 100%
    );
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
  }
  img {
    position: absolute;
    left: 0;
    top: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
  h2 {
    color: white;
    z-index: 2;
    line-height: 26px;
    width: 50%;
  }
`;

const CardLocation = (props) => {
  return (
    <div>
      {props.data.map((location) => (
        <ContentLocation key={location.id}>
          <img src={location.cover} alt={location.title} />
          <h2>{location.title}</h2>
        </ContentLocation>
      ))}
    </div>
  );
};

export default CardLocation;
