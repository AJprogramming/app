import "./App.css";
import PersonCard from "./components/PersonCard";

function App() {
  return (
    <div className="center">
      <div>
        <PersonCard
          FirstName={"Joe"}
          LastName={"Doe"}
          age={25}
          HairColor={"Black"}
        ></PersonCard>
        <PersonCard
          FirstName={"Carl"}
          LastName={"Wheezer"}
          age={21}
          HairColor={"Red"}
        ></PersonCard>
        <PersonCard
          FirstName={"Jimmy"}
          LastName={"Neutron"}
          age={30}
          HairColor={"Brown"}
        ></PersonCard>
        <PersonCard
          FirstName={"Cindy"}
          LastName={"Lassnaim"}
          age={28}
          HairColor={"Blonde"}
        ></PersonCard>
      </div>
    </div>
  );
}

export default App;
