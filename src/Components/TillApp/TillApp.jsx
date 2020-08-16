import React, { useState, createContext } from 'react';
import colors from '../../config/colors';
import { TillAppContext } from './TillAppContext';

import TillAppMenu from './TillAppMenu';

export default function AppMenu() {
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <TillAppContext.Provider value={{ totalPrice }}>
      <div style={styles.container}>
        <div style={styles.headerMenu}>App Header</div>
        <div style={styles.leftMenu}>Left Menu {totalPrice.toFixed(2)}</div>
        <div style={styles.mainMenu}>
          <TillAppMenu />
        </div>
        <div style={styles.footerMenu}>Footer Menu</div>
      </div>
    </TillAppContext.Provider>
  );
}

const styles = {
  container: {
    display: 'grid',
    gridTemplateAreas: "'a a a''b c c''b d d'",
    gridTemplateRows: '10vh auto 15vh',
    width: '100vw',
    height: '100vh',
  },
  headerMenu: {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    gridArea: 'a',
    backgroundColor: colors.primary,
  },
  leftMenu: {
    display: 'grid',
    justifyContent: 'center',
    gridArea: 'b',
    minWidth: '30vw',
    backgroundColor: colors.secondary,
  },
  mainMenu: {
    display: 'grid',
    justifyContent: 'center',
    gridArea: 'c',
    backgroundColor: colors.light,
  },
  footerMenu: {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    gridArea: 'd',
    backgroundColor: colors.medium,
  },
};
