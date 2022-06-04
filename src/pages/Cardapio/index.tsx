import React from "react";

import { ReactComponent as Logo } from "assets/logo.svg";

import Styles from "./Cardapio.module.scss";

import Buscador from "./Buscador";

const Cardapio: React.FC = () => {
  const [busca, setBusca] = React.useState<string>("");

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
      </section>
    </main>
  );
};

export default Cardapio;
