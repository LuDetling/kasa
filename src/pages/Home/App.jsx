import LittleBanniere from "../../components/LittleBanniere";
import banniere from "../../assets/banniere-home.png";
import CardLocation from "../../components/CardLocation";
import data from "../../json/data.json";

let heightImg = "111px";
if (window.innerWidth > "800") {
  heightImg = "223px";
}
function App() {
  return (
    <div className="App">
      <LittleBanniere
        srcImg={banniere}
        textImg="Chez vous, partout et ailleurs"
        heightImg={heightImg}
      />
      <CardLocation data={data} />
    </div>
  );
}

export default App;
