import LittleBanniere from "../../components/LittleBanniere";
import banniere from "../../assets/banniere-home.png";
import CardLocation from "../../components/CardLocation";
import data from "../../json/data.json";

function App() {
  return (
    <div className="App">
      <LittleBanniere
        srcImg={banniere}
        textImg="Chez vous, partout et ailleurs"
      />
      <CardLocation data={data} />
    </div>
  );
}

export default App;
