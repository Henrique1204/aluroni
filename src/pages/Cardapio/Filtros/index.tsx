import React from "react";
import classNames from "classnames";

import Styles from "./Filtros.module.scss";
import filtrosJson from "./filtros.json";

export type IFiltro = number | null;

type IOpcao = typeof filtrosJson[0];

interface IFiltrosProps {
  filtro: IFiltro;
  setFiltro: React.Dispatch<React.SetStateAction<IFiltro>>;
}

const Filtros: React.FC<IFiltrosProps> = ({ filtro, setFiltro }) => {
  const selecionarFiltro = ({ id }: IOpcao) => {
    setFiltro((active) => (active === id ? null : id));
  };

  return (
    <div className={Styles.filtros}>
      {filtrosJson.map((opcao) => (
        <button
          key={opcao.id}
          onClick={() => selecionarFiltro(opcao)}
          className={classNames({
            [Styles.filtros__filtro]: true,
            [Styles["filtros__filtro--ativo"]]: filtro === opcao.id,
          })}
        >
          {opcao.label}
        </button>
      ))}
    </div>
  );
};

export default Filtros;
