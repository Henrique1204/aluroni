import React from "react";

import logo from "assets/logo.svg";

import Styles from "./Item.module.scss";
import classNames from "classnames";

interface ICategoryItem {
  id: number;
  label: string;
}

export interface IItemProps {
  title: string;
  description: string;
  photo: string;
  size: number;
  serving: number;
  price: number;
  id: number;
  category: ICategoryItem;
}

const Item: React.FC<IItemProps> = ({
  title,
  photo,
  description,
  category,
  size,
  serving,
  price,
}) => {
  return (
    <div className={Styles.item}>
      <div className={Styles.item__imagem}>
        <img
          src={photo}
          alt={title}
          onError={({ currentTarget }) =>
            currentTarget.setAttribute("src", logo)
          }
        />
      </div>

      <div className={Styles.item__descricao}>
        <div className={Styles.item__titulo}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className={Styles.item__tags}>
          <div
            className={classNames({
              [Styles.item__tipo]: true,
              [Styles[`item__tipo__${category.label.toLowerCase()}`]]: true,
            })}
          >
            {category.label}
          </div>

          <div className={Styles.item__porcao}>{size}g</div>

          <div className={Styles.item_qtdpessoas}>
            Serve {serving} pessoa{serving === 1 ? "" : "s"}
          </div>

          <div className={Styles.item__valor}>R$ {price.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default Item;
