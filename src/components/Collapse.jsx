import { useState } from "react";
import styled from "styled-components";
import colors from "../utils/style/colors";

const ContentCollapse = styled.div`
  button {
    font-family: "montserrat-medium";
    width: 100%;
    background-color: ${colors.primary};
    outline: none;
    border: none;
    border-radius: 5px;
    color: white;
    text-align: left;
    padding: 5.5px 11.5px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    text-align: center;
    svg {
      height: 16px;
      width: 16px;
      &.active {
        transform: rotate(180deg);
      }
    }
  }
  .toggle {
    background-color: #f7f7f7;
    color: ${colors.primary};
    border-radius: 5px;
    font-family: "montserrat-regular";
    padding: 23px 11.5px;
    font-size: 12px;
    line-height: 17px;
  }
`;

const Collapse = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <ContentCollapse>
      <button
        onClick={() => {
          setOpen(!open);
        }}
      >
        {props.bouton}
        <svg
          className={open && "active"}
          width="16"
          height="10"
          viewBox="0 0 16 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.3705 0.761356L0.0120851 2.13059L7.61002 9.73828L15.208 2.1229L13.8495 0.761357L7.61002 7.0152L1.3705 0.761356Z"
            fill="white"
          />
        </svg>
      </button>
      {open && (
        <div className="toggle">
          <p>{props.content}</p>
        </div>
      )}
    </ContentCollapse>
  );
};

export default Collapse;
