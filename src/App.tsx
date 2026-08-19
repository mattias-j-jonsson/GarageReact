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

  const handleAddCar = (regNumber: string, brand: string) => {
    // Tips: Validera att fälten inte är tomma (!regNumber.trim() || !brand.trim())
    // Skapa ett nytt bilobjekt med id: Date.now()
    // Uppdatera state med spread-operatorn: setCars(prev => [...prev, newCar])
    // Nollställ fälten efteråt
    setCars(prev => [...prev, {id: Date.now(), regNumber: regNumber, brand: brand}]);
  };

  const deleteCar = (id: number) => {
    setCars(cars.filter((car) => car.id !== id));
  }
  

  return (
    // Rubrik och bilräknare
    <div className="mx-auto w=2/3 p-4 bg-slate-950">
      <Header numberOfCars={cars.length}/>
      {/* Parkeringsformulär */}
      <div>
        <Form addCar={handleAddCar} />
      </div>
      {/* Parkerade fordon */}
      <div>
        <h2 className="text-emerald-400">Parkerade fordon</h2>
        {
          (cars.length === 0) ? (
          <p className="text-slate-500 text-center py-8 bg-slate-800/50 rounded-xl border border-slate-800">
              Garaget är tomt.
            </p>)
            : (
            cars.map((car: ICar) => (
                <Parked onClick={() => deleteCar(car.id)} regNumber={car.regNumber} brand={car.brand} />
              ))
          )
        }
      </div>
    </div>
  );
}

export default App;
