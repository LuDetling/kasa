import styled from "styled-components";
const BanniereContent = styled.div`
  margin-top: 20px;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: center;
  color: white;
  font-family: "montserrat-medium";
  overflow: hidden;
  border-radius: 10px;
  background-color: black;
  max-height: 255px;
  height: 111px;
  @media screen and (min-width: 1200px) {
    margin: 20px 40px 0;
  }
  @media screen and (min-width: 800px) {
    height: 223px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    border-radius: 10px;
    opacity: 0.7;
    display: block;
  }
  div {
    margin-left: 16px;
    width: 217px;
    left: 36px;
    top: 114px;
    font-size: 24px;
    font-weight: 500;
    letter-spacing: 0em;
    text-align: left;
    z-index: 1;
    @media screen and (min-width: 800px) {
      text-align: center;
      width: 100%;
    }
  }
`;

const LittleBanniere = (props) => {
  return (
    <BanniereContent>
      <img src={props.srcImg} alt="" />
      <div>{props.textImg}</div>
    </BanniereContent>
  );
};

export default LittleBanniere;
