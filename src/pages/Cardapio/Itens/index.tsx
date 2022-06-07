import React from "react";

import cardapio from "./itens.json";

import Styles from "./Itens.module.scss";
import Item, { IItemProps } from "./Item";

import { IFiltro } from "../Filtros";

interface IItensProps {
  busca: string;
  filtro: IFiltro;
  ordenador: string;
}

type IItemPropsKeys = keyof IItemProps;

type ISortKeyDepara = { [key: string]: IItemPropsKeys };

const testaBusca = (busca: string, titulo: string): boolean => {
  const regex = new RegExp(busca, "i");

  return !busca || regex.test(titulo);
};

const testaFiltro = (filtro: IFiltro, categoriaId: number): boolean => {
  return !filtro || filtro === categoriaId;
};

const ordenar = (ordenador: string, lista: IItemProps[]): IItemProps[] => {
  const SortKeyDepara: ISortKeyDepara = {
    porcao: "size",
    qtd_pessoas: "serving",
    preco: "price",
  };

  const key = SortKeyDepara[ordenador];

  return !key ? lista : lista.sort((a, b) => (a[key] > b[key] ? 1 : -1));
};

const Itens: React.FC<IItensProps> = ({ busca, filtro, ordenador }) => {
  const listaCardapio = React.useMemo(() => {
    const lista = cardapio.filter(
      ({ title, category }) =>
        testaBusca(busca, title) && testaFiltro(filtro, category.id)
    );

    return ordenar(ordenador, lista);
  }, [busca, filtro, ordenador]);

  return (
    <div className={Styles.itens}>
      {listaCardapio.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Itens;
