// import { useState } from 'react'

import { useState } from "react";
import Header from "./Header";
import Form from "./Form"
import Parked from "./Parked";

interface ICar {
  id: number;
  regNumber: string;
  brand: string;
}

function App() {
  const [cars, setCars] = useState<ICar[]>([
    { id: 1, regNumber: "ABC123", brand: "Volvo" },
    { id: 2, regNumber: "XYZ789", brand: "Saab" }
  ]);

  const handleAddCar = () => {
    // Tips: Validera att fälten inte är tomma (!regNumber.trim() || !brand.trim())
    // Skapa ett nytt bilobjekt med id: Date.now()
    // Uppdatera state med spread-operatorn: setCars(prev => [...prev, newCar])
    // Nollställ fälten efteråt
    let x: number = 0;
    if (1 < x) {
      x = x-2;
      console.log(x);
      setCars([]);
    }
  };
  
  handleAddCar();

  return (
    // Rubrik och bilräknare
    <div className="mx-auto w=2/3 p-4 bg-slate-950">
      <Header numberOfCars={cars.length}/>
      {/* Parkeringsformulär */}
      <div>
        <Form />
      </div>
      {/* Parkerade fordon */}
      <div>
        <h2 className="text-emerald-400">Parkerade fordon</h2>
        <Parked />
        <Parked />
      </div>
    </div>
  );
}

export default App;
