import React, { useContext } from 'react';

import { TillAppContext } from './TillAppContext';

export default function TillAppSideMenu() {
  const { totalPrice, selectedItems } = useContext(TillAppContext);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <p>Till POS</p>
      </div>
      <div style={styles.mainMenu}>
        {selectedItems.map((item) => (
          <div>poop</div>
        ))}
      </div>
      <div style={styles.footerMenu}>
        <p>Price Total: {totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'green',
    height: '90vh',
  },
  header: {
    display: 'grid',
    justifyItems: 'center',
    width: '100%',
    alignSelf: 'start',
    backgroundColor: 'white',
  },
  mainMenu: {
    marginLeft: 10,
    height: 80,
    backgroundColor: 'red',
    flex: 1,
    overflow: 'scroll',
  },
  footerMenu: {
    backgroundColor: 'white',
    alignSelf: 'end',
    marginLeft: 'auto',
  },
};
