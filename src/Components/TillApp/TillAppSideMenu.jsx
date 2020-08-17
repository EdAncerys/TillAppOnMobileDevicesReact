import React, { useContext } from 'react';

import { TillAppContext } from './TillAppContext';
import TillAppTextPrint from './TillAppTextPrint';

export default function TillAppSideMenu() {
  const { totalPrice, selectedItems } = useContext(TillAppContext);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div>Till POS</div>
      </div>
      <div style={styles.mainMenu}>
        {selectedItems.map((item) => (
          <TillAppTextPrint title={item.title} price={item.price} />
        ))}
      </div>
      <div style={styles.footerMenu}>
        <div style={styles.footerText}>
          <div>Price Total: {totalPrice.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '90vh',
  },
  header: {
    display: 'grid',
    justifyItems: 'center',
    width: '100%',
    alignSelf: 'start',
  },
  mainMenu: {
    marginLeft: 10,
    marginRight: 10,
    height: 80,
    flex: 1,
    overflow: 'scroll',
  },
  footerMenu: {
    alignSelf: 'end',
    marginLeft: 'auto',
  },
  footerText: {
    margin: 10,
  },
};
