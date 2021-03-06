import React from "react";

import { ReactComponent as Logo } from "assets/logo.svg";

import Styles from "./Cardapio.module.scss";

import Buscador from "./Buscador";
import Filtros, { IFiltro } from "./Filtros";
import Ordernador from "./Ordenador";
import Itens from "./Itens";

const Cardapio: React.FC = () => {
  const [busca, setBusca] = React.useState<string>("");
  const [filtro, setFiltro] = React.useState<IFiltro>(null);

  const [ordenador, setOrdenador] = React.useState<string>("");

  return (
    <main>
      <nav className={Styles.menu}>
        <Logo />
      </nav>

      <header className={Styles.header}>
        <div className={Styles.header__text}>A casa do código e da Massa</div>
      </header>

      <section className={Styles.cardapio}>
        <h3 className={Styles.cardapio__titulo}>Cardápio</h3>

        <Buscador busca={busca} setBusca={setBusca} />

        <div className={Styles.cardapio__filtros}>
          <Filtros filtro={filtro} setFiltro={setFiltro} />

          <Ordernador value={ordenador} onChange={setOrdenador} />
        </div>

        <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
      </section>
    </main>
  );
};

export default Cardapio;
