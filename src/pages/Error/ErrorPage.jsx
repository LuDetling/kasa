import styled from "styled-components";
import colors from "../../utils/style/colors";

const ErrorContent = styled.div`
  color: ${colors.primary};
  font-family: "montserrat-medium";
  font-size: 18px;
  text-align: center;
  margin: 0 37px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  height: calc(100vh - 288px);

  .error {
    font-size: 96px;
    font-family: "montserrat-bold";
  }
  p {
    margin-top: 11px;
    line-height: 26px;
  }
  a {
    color: ${colors.primary};
  }
`;

const ErrorPage = () => {
  return (
    <ErrorContent>
      <div>
        <div className="error">404</div>
        <p>Oups! La page que vous demandez n'existe pas.</p>
      </div>
      <a href="/">Retourner sur la page d’accueil</a>
    </ErrorContent>
  );
};

export default ErrorPage;
