import { useState } from "react";

const Form = ({addCar}: {addCar: (regNumber: string, brand: string) => void}) => {
  const [regNumber, setRegNumber] = useState("");
  const [brand, setBrand] = useState("");
  
  const handleSubmit = (e: SubmitEvent) => {
    // validate input
    e.preventDefault();
    e.target.reset();
    addCar(regNumber, brand);
  };
  return (
    <>
      <h2 className="text-emerald-400">Parkera nytt fordon</h2>
      <form className="" action="" onSubmit={handleSubmit}>
        <label htmlFor="regnr" className="text-slate-400 pr-2">
          Registreringsnummer
        </label>
        <input className="mr-2" type="text" required placeholder="t ex ABC123 eller DEF45G"
        onChange={(e) => setRegNumber(e.target.value)} />
        <label htmlFor="märke" className="text-slate-400 mr-2">
          Märke
        </label>
        <input className="mx-2" type="text" required placeholder="t ex Volvo"
        onChange={(e) => setBrand(e.target.value)} />
        <button className="bg-emerald-600 mx-2" type="submit">Parkera bil</button>
      </form>
    </>
  );
};

export default Form;
