import React from "react";
import classNames from "classnames";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

import Styles from "./Ordenador.module.scss";
import ordenadores from "./ordenadores.json";

interface IOrdenadorProps {
  value?: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

const Ordernador: React.FC<IOrdenadorProps> = ({ value, onChange }) => {
  const [aberto, setAberto] = React.useState<boolean>(false);

  const nomeSelecionado = React.useMemo(
    () => ordenadores.find((item) => item.value === value)?.nome || "",
    [value]
  );

  const toggleAberto = () => setAberto((prevState) => !prevState);

  return (
    <button
      className={classNames({
        [Styles.ordenador]: true,
        [Styles["ordenador--ativo"]]: value !== "",
      })}
      onClick={toggleAberto}
      onBlur={() => setAberto(false)}
    >
      <span>{value ? nomeSelecionado : "Ordenar Por"}</span>

      {aberto ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}

      <div
        className={classNames({
          [Styles.ordenador__options]: true,
          [Styles["ordenador__options--ativo"]]: aberto,
        })}
      >
        {ordenadores.map((ordenador) => (
          <div
            key={ordenador.value}
            className={Styles.ordenador__option}
            onClick={() => onChange(ordenador.value)}
          >
            {ordenador.nome}
          </div>
        ))}
      </div>
    </button>
  );
};

export default Ordernador;
