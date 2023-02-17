import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Slider from "../../components/Slider";
import Collapse from "../../components/Collapse";
import datas from "../../json/data.json";
import colors from "../../utils/style/colors";
import { Navigate } from "react-router-dom";

const ContentLogement = styled.div`
  padding: 20px;
  font-family: "montserrat-medium";
  color: ${colors.primary};
  h1 {
    margin-top: 15px;
    font-size: 18px;
    line-height: 25px;
  }
  .location {
    margin-top: 5px;
    font-size: 14px;
  }
  .tags {
    display: flex;
    align-items: center;
    margin-top: 10px;
    div {
      background-color: ${colors.primary};
      color: white;
      font-size: 10px;
      margin-right: 10px;
      padding: 2px 15px;
      border-radius: 5px;
    }
  }
  .rating-profil {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 17px;
    .rating {
      .good-rating {
        path {
          fill: ${colors.primary};
        }
      }
    }
    .profil {
      display: flex;
      align-items: center;
      div {
        font-size: 12px;
        line-height: 17px;
      }
      img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        margin-left: 10px;
      }
    }
  }
`;

const stars = [1, 2, 3, 4, 5];

export default function Logement() {
  const location = useLocation();
  const idLocation = location.pathname.split("/");
  const data = datas.filter((data) => data.id === idLocation[2])[0];
  const slideAlone = {
    height: "223px",
  };
  return data ? (
    <ContentLogement>
      {data.pictures.length > 1 ? (
        <Slider srcImg={data.pictures} heightImg="223px" />
      ) : (
        <img src={data.pictures[0]} style={slideAlone} alt="" />
      )}
      <h1>{data.title}</h1>
      <div className="location">{data.location}</div>
      <div className="tags">
        {data.tags.map((tag, index) => (
          <div key={index}>{tag}</div>
        ))}
      </div>
      <div className="rating-profil">
        <div className="rating">
          {stars.map((star) => (
            <svg
              key={star}
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={parseInt(data.rating) >= star ? "good-rating" : null}
            >
              <path
                d="M10.8225 7.5L9 1.5L7.1775 7.5H1.5L6.135 10.8075L4.3725 16.5L9 12.9825L13.635 16.5L11.8725 10.8075L16.5 7.5H10.8225Z"
                fill="#E3E3E3"
              />
            </svg>
          ))}
        </div>
        <div className="profil">
          <div className="name">
            <div>{data.host.name.split(" ")[0]}</div>
            <div>{data.host.name.split(" ")[1]}</div>
          </div>
          <img src={data.host.picture} alt={data.host.name} />
        </div>
      </div>
      <Collapse
        bouton="Description"
        content="Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). "
      />
      <Collapse bouton="Équipements" list={data.equipments} />
    </ContentLogement>
  ) : (
    <Navigate to={"/errorPage"} replace={true} />
  );
}
