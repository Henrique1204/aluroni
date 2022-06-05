import React from "react";

import cardapio from "./itens.json";

import Styles from "./Itens.module.scss";
import Item from "./Item";

const Itens: React.FC = () => {
  return (
    <div className={Styles.itens}>
      {cardapio.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Itens;
