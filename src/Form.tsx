const Form = () => {
  return (
    <>
      <h2 className="text-emerald-400">Parkera nytt fordon</h2>
      <form className="" action="">
        <label htmlFor="regnr" className="text-slate-400 pr-2">
          Registreringsnummer
        </label>
        <input className="mr-2" type="text" required placeholder="t ex ABC123 eller DEF45G" />
        <label htmlFor="märke" className="text-slate-400 mr-2">
          Märke
        </label>
        <input className="mx-2" type="text" required placeholder="t ex Volvo" />
        <button className="bg-emerald-600 mx-2">Parkera bil</button>
      </form>
    </>
  );
};

export default Form;
