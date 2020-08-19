import React, { useState } from 'react';
import colors from '../../config/colors';
import { TillAppContext } from './TillAppContext';

import TillAppMenu from './TillAppMenu';
import TillAppSideMenu from './TillAppSideMenu';
import TillAppHeaderMenu from './TillAppHeaderMenu';
import TillAppFooterMenu from './TillAppFooterMenu';

export default function AppMenu() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);
  const [screenOne, setScreenOne] = useState(true);
  const [screenTwo, setScreenTwo] = useState(false);
  const [screenThree, setScreenThree] = useState(false);

  return (
    <TillAppContext.Provider
      value={{
        totalPrice,
        setTotalPrice,
        selectedItems,
        setSelectedItems,
        screenOne,
        setScreenOne,
        screenTwo,
        setScreenTwo,
        screenThree,
        setScreenThree,
      }}
    >
      <div style={styles.container}>
        <div style={styles.headerMenu}>
          <TillAppHeaderMenu />
        </div>
        <div style={styles.sideMenu}>
          <TillAppSideMenu />
        </div>
        <div style={styles.mainMenu}>
          <TillAppMenu />
        </div>
        <div style={styles.footerMenu}>
          <TillAppFooterMenu />
        </div>
      </div>
    </TillAppContext.Provider>
  );
}

const styles = {
  container: {
    display: 'grid',
    gridTemplateAreas: "'a a a''b c c''b d d'",
    gridTemplateRows: '15vh auto 10vh',
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
