import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { TillAppContext } from './TillAppContext';
import TillAppTextPrint from './TillAppTextPrint';
import colors from '../../config/colors';

const color = colors.white;

export default function TillAppSideMenu() {
  const { totalPrice, selectedItems } = useContext(TillAppContext);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <FontAwesomeIcon icon="shopping-basket" size="2x" color={color} />
      </div>
      <div style={styles.mainMenu}>
        {selectedItems.map((item) => (
          <TillAppTextPrint
            key={item.id}
            title={item.title}
            quantity={item.quantity}
            price={item.price}
            id={item.id}
            color={color}
          />
        ))}
      </div>
      <div style={styles.footerMenu}>
        <div style={styles.footerText}>
          <div>Price Total: £{totalPrice.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '85vh',
  },
  header: {
    display: 'grid',
    justifyItems: 'center',
    width: '100%',
    alignSelf: 'start',
    margin: 10,
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
    color: color,
    fontSize: 20,
    fontWeight: 600,
    margin: 10,
    marginLeft: 20,
  },
};
