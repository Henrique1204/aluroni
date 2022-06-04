import React from "react";

import Styles from "./Filtros.module.scss";
import filtrosJson from "./filtros.json";

type IOpcao = typeof filtrosJson[0];

const Filtros: React.FC = () => {
  const selecionarFiltro = (opcao: IOpcao) => {};

  return (
    <div className={Styles.filtros}>
      {filtrosJson.map((opcao) => (
        <button className={Styles.filtros__filtro} key={opcao.id} onClick={() => selecionarFiltro(opcao)}>
          {opcao.label}
        </button>
      ))}
    </div>
  );
};

export default Filtros;
