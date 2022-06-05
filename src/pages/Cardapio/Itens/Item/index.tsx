import React from "react";

import logo from "assets/logo.svg";

import Styles from "./Item.module.scss";

interface ICategoryItem {
  id: number;
  label: string;
}

interface IItemProps {
  title: string;
  description: string;
  photo: string;
  size: number;
  serving: number;
  price: number;
  id: number;
  category: ICategoryItem;
}

const Item: React.FC<IItemProps> = ({ title, photo, description }) => {
  return (
    <div className={Styles.item}>
      <div className={Styles.item__imagem}>
        <img src={logo} alt="Aluroni" />
      </div>

      <div className={Styles.item__descricao}>
        <div className={Styles.item__titulo}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className={Styles.item__tags}>
          <div className={Styles.item__tipo}>Massa</div>

          <div className={Styles.item__porcao}>400g</div>

          <div className={Styles.item_qtdpessoas}>Serve 2 pessoas</div>

          <div className={Styles.item__valor}>R$ 20,00</div>
        </div>
      </div>
    </div>
  );
};

export default Item;
