const Parked = () => {
  return (
    <div className="bg-slate-800 p-2 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <span className="bg-emerald-500/20 text-emerald-300 text-xs uppercase font-semibold px-2.5 py-1">
          ABC123
        </span>
        <h3 className="text-lg font-bold text-white">Volvo</h3>
      </div>

      <button
        className="bg-red-600/20 hover:bg-red-600 text-red-400 hover:text-white px-4 py-2 rounded-lg text-sm font-medium border border-red-500/30 transition-all cursor-pointer">
        Ta bort
      </button>
    </div>
  );
};

export default Parked;
