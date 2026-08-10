const Form = () => {
  return (
    <>
      <h2 className="text-emerald-400">Parkera nytt fordon</h2>
      <form action="">
        <label htmlFor="regnr" className="text-slate-400">
          Registreringsnummer
        </label>
        <input type="text" required placeholder="t ex ABC123 eller DEF45G" />
        <label htmlFor="märke" className="text-slate-400">
          Märke
        </label>
        <input type="text" required placeholder="t ex Volvo" />
        <button className="bg-emerald-600">Parkera bil</button>
      </form>
    </>
  );
};

export default Form;
