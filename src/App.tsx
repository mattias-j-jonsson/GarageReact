// import { useState } from 'react'

import Header from "./Header";
import Form from "./Form"
import Parked from "./Parked";

function App() {
  return (
    // Rubrik och bilräknare
    <div className="mx-auto w=2/3 p-4 bg-slate-950">
      <Header />
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
