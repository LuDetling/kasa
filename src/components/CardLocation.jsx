import styled from "styled-components";
import colors from "../utils/style/colors";

const ContentLocation = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  border-radius: 10px;
  margin: 20px 0;
  row-gap: 50px;
  column-gap: 60px;
  @media screen and (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0;
    background-color: inherit;
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    background-color: #f6f6f6;
    padding: 56px 50px;
    margin: 20px 40px;
  }
  .cardLocation {
    flex-grow: 3;
    flex-shrink: 3;
    font-family: "montserrat-medium";
    font-size: 18px;
    height: 255px;
    background-color: ${colors.primary};
    position: relative;
    border-radius: 10px;
    padding: 20px;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
    text-decoration: none;
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
      transition: 0.5s ease-out;
    }
    &:hover {
      &::before {
        transform: translateY(-100%);
      }
    }
    img {
      position: absolute;
      left: 0;
      top: 0;
      object-fit: cover;
      width: 100%;
      height: 100%;
      z-index: 0;
      transform: translateY(0);
      transition: 0.5s;
    }
    /* &:hover {
      img {
        transform: translateY(0);
      }
    } */
    h2 {
      color: white;
      z-index: 2;
      line-height: 26px;
      width: 50%;
    }
  }
`;

const CardLocation = (props) => {
  return (
    <ContentLocation>
      {props.data.map((location) => (
        <a
          className="cardLocation"
          key={location.id}
          href={`/logement/${location.id}`}
        >
          <img src={location.cover} alt={location.title} />
          <h2>{location.title}</h2>
        </a>
      ))}
    </ContentLocation>
  );
};

export default CardLocation;
