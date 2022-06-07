import React from "react";

import cardapio from "./itens.json";

import Styles from "./Itens.module.scss";
import Item from "./Item";

import { IFiltro } from "../Filtros";

interface IItensProps {
  busca: string;
  filtro: IFiltro;
  ordenador: string;
}

const testaBusca = (busca: string, titulo: string): boolean => {
  const regex = new RegExp(busca, 'i');

  return !busca || regex.test(titulo);
};

const testaFiltro = (filtro: IFiltro, categoriaId: number): boolean => {
  return !filtro || filtro === categoriaId;
};

const Itens: React.FC<IItensProps> = ({ busca, filtro, ordenador }) => {
  const listaCardapio = React.useMemo(() => {
    const novaLista = cardapio.filter(
      ({ title, category }) =>
        testaBusca(busca, title) && testaFiltro(filtro, category.id)
    );

    return novaLista;
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
