import React from "react";

import Styles from "./Ordenador.module.scss";
import ordenadores from "./ordenadores.json";

const Ordernador: React.FC = () => {
  return (
    <button className={Styles.ordenador}>
      <span>Ordenar Por</span>

      <div className={Styles.ordenador__options}>
        {ordenadores.map((ordenador) => (
          <div key={ordenador.value} className={Styles.ordenador__option}>
            {ordenador.nome}
          </div>
        ))}
      </div>
    </button>
  );
};

export default Ordernador;
