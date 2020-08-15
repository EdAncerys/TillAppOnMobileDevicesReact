import React from 'react';
import colors from '../../config/colors';

export default function AppMenu() {
  return (
    <div style={styles.container}>
      <div style={styles.headerMenu}>App Header</div>
      <div style={styles.leftMenu}>Left Menu</div>
      <div style={styles.mainMenu}>Main Menu</div>
      <div style={styles.footerMenu}>Footer Menu</div>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    gridTemplateAreas: "'a a a a''b c c c''b d d d'",
    gridTemplateRows: '10vh auto 15vh',
    backgroundColor: colors.light,
    width: '100vw',
    height: '100vh',
  },
  headerMenu: {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    gridArea: 'a',
  },
  leftMenu: {
    display: 'grid',
    justifyContent: 'center',
    gridArea: 'b',
    backgroundColor: colors.secondary,
  },
  mainMenu: {
    display: 'grid',
    justifyContent: 'center',
    gridArea: 'c',
    backgroundColor: colors.primary,
    justifyContent: 'center',
  },
  footerMenu: {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    gridArea: 'd',
    backgroundColor: colors.medium,
  },
};
