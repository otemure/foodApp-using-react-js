import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/foodList";
import FoodDetails from "./components/foodDetails";
import Nav from "./components/Nav";
import styles from "./components/cssModules/app.module.css";
import OuterContainer from "./components/outerContainer";
import InnerContainer from "./components/innerContainer";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("");
  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <OuterContainer>
        <InnerContainer>
          <FoodList setFoodId={setFoodId} foodData={foodData} />
          <FoodDetails foodId={foodId} />
        </InnerContainer>
      </OuterContainer>
    </div>
  );
}

export default App;
