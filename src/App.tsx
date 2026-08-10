// import { useState } from 'react'

import Header from "./Header";

function App() {
  return (
    // Rubrik och bilräknare
    <div className="mx-auto w=2/3 bg-slate-950">
      <Header />
      {/* Parkeringsformulär */}
      <div>
        <h2 className="text-emerald-400">Parkera nytt fordon</h2>
        <form action="">
          <label htmlFor="regnr" className="text-slate-400">Registreringsnummer</label>
          <input type="text" required placeholder="t ex ABC123 eller DEF45G"/>
          <label htmlFor="märke" className="text-slate-400">Märke</label>
          <input type="text" required placeholder="t ex Volvo"/>
          <button className="bg-emerald-600">Parkera bil</button>
        </form>
      </div>
      {/* Parkerade fordon */}
      <div>
        <h2 className="text-emerald-400">Parkerade fordon</h2>
      </div>
    </div>
  );
}

export default App;
