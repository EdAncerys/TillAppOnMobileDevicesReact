import React from 'react';
import colors from '../config/colors';

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
    justifyContent: 'center',
    backgroundColor: colors.light,
  },
};
