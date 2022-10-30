import "./App.css";
import PersonCard from "./components/PersonCard";

function App() {
  return (
    <div className="center">
      <div>
        <PersonCard
          FirstName={"Joe"}
          LastName={"Doe"}
          Age={"25"}
          HairColor={"Black"}
        ></PersonCard>
        <PersonCard
          FirstName={"Carl"}
          LastName={"Wheezer"}
          Age={"21"}
          HairColor={"Red"}
        ></PersonCard>
        <PersonCard
          FirstName={"Jimmy"}
          LastName={"Neutron"}
          Age={"30"}
          HairColor={"Brown"}
        ></PersonCard>
        <PersonCard
          FirstName={"Cindy"}
          LastName={"Lassnaim"}
          Age={"28"}
          HairColor={"Blonde"}
        ></PersonCard>
      </div>
    </div>
  );
}

export default App;
