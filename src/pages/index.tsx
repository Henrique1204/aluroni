import React from 'react';

import Styles from './Cardapio.module.scss';
import { ReactComponent as Logo } from '../assets/logo.svg';

const Cardapio: React.FC = () => {
    return <main>
        <nav className={Styles.menu}>
            <Logo />
        </nav>
    </main>;
};

export default Cardapio;
