import React from "react";

const Header = ({numberOfCars}: {numberOfCars: number}) => {
    return (
        <header>
        <h1 className="text-emerald-400 font-bold">Minigaraget</h1>
        <p className="text-slate-400">Antal bilar i garaget: <span className="font-semibold text-white">{numberOfCars}</span></p>
      </header>
    );
}

export default Header;