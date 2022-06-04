import React from "react";

import Styles from "./Cardapio.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";

const Cardapio: React.FC = () => {
  return (
    <main>
      <nav className={Styles.menu}>
        <Logo />
      </nav>

      <header className={Styles.header}>
          <div className={Styles.header__text}>
              A casa do código e da Massa
          </div>
      </header>
    </main>
  );
};

export default Cardapio;
