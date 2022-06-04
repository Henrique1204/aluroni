import React from "react";
import { CgSearch } from "react-icons/cg";

import Styles from "./Buscador.module.scss";

interface IBuscadorProps {
  busca: string;
  setBusca: React.Dispatch<React.SetStateAction<string>>;
}

const Buscador: React.FC<IBuscadorProps> = ({ busca, setBusca }) => {
  return (
    <div className={Styles.buscador}>
      <input
        className={Styles.buscador__input}
        value={busca}
        onChange={({ target }) => setBusca(target.value)}
      />

      <CgSearch size={20} color="#4C4D5E" />
    </div>
  );
};

export default Buscador;
