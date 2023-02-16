import styled from "styled-components";
const BanniereContent = styled.div`
  margin-top: 20px;
  height: 111px;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: center;
  color: white;
  font-family: "montserrat-medium";
  overflow: hidden;
  border-radius: 10px;
  background-color: black;
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
    height: 48px;
    width: 217px;
    left: 36px;
    top: 114px;
    font-size: 24px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    z-index: 1;
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
