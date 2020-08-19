import React, { useState } from 'react';
import colors from '../../config/colors';
import { TillAppContext } from './TillAppContext';

import TillAppMenu from './TillAppMenu';
import TillAppSideMenu from './TillAppSideMenu';

export default function AppMenu() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedItems, setSelectedItems] = useState([
    { title: 'test2', quantity: 1, price: '2,44' },
  ]);

  return (
    <TillAppContext.Provider
      value={{ totalPrice, setTotalPrice, selectedItems, setSelectedItems }}
    >
      <div style={styles.container}>
        <div style={styles.headerMenu}>App Header</div>
        <div style={styles.sideMenu}>
          <TillAppSideMenu />
        </div>
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
    gridTemplateRows: '10vh auto 10vh',
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
  sideMenu: {
    display: 'grid',
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
