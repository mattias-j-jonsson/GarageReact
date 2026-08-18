const Parked = ({regNumber, brand, onClick}: {regNumber: string, brand: string, onClick:(id: number) => void}) => {
  return (
    <div className="bg-slate-800 p-2 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <span className="bg-emerald-500/20 text-emerald-300 text-xs uppercase font-semibold px-2.5 py-1">
        {regNumber}
        </span>
        <h3 className="text-lg font-bold text-white">{brand}</h3>
      </div>

      <button onClick={onClick}
        className="bg-red-600/20 hover:bg-red-600 text-red-400 hover:text-white px-4 py-2 rounded-lg text-sm font-medium border border-red-500/30 transition-all cursor-pointer">
        Ta bort
      </button>
    </div>
  );
};

export default Parked;
