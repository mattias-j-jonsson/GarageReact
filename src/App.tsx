// import { useState } from 'react'

function App() {
  return (
    // Rubrik och bilräknare
    <div>
      <header>
        <h1>Minigaraget</h1>
        <p>Antal bilar i garaget: </p>
      </header>
      {/* Parkeringsformulär */}
      <div>
        <h2>Parkera nytt fordon</h2>
        <form action="">
          <label htmlFor="regnr">Registreringsnummer</label>
          <input type="text" required placeholder="t ex ABC123 eller DEF45G"/>
          <label htmlFor="märke">Märke</label>
          <input type="text" required placeholder="t ex Volvo"/>
          <button>Parkera bil</button>
        </form>
      </div>
      {/* Parkerade fordon */}
      
    </div>
  );
}

export default App;
