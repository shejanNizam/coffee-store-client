import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import Header from "./components/Header";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <>
      <div className="m-24">
        <Header />
        <h1 className="text-6xl text-purple-400 text-center">
          Hot Hot Cold Coffee Items: {coffees?.length}
        </h1>
        <div className="grid md:grid-cols-2 gap-4 my-8">
          {coffees?.map((coffee) => (
            <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            ></CoffeeCard>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
