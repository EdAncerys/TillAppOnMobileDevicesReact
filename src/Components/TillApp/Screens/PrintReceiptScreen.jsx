import React, { useContext } from 'react';
import { TillAppContext } from '../TillAppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import colors from '../../../config/colors';

export default function PrintReceiptScreen() {
  const { totalPrice, selectedItems } = useContext(TillAppContext);

  return (
    <div>
      <div style={styles.container}>
        <div style={styles.header}>
          Receipt{' '}
          <FontAwesomeIcon
            style={{ marginLeft: 20 }}
            icon="spinner"
            spin
            size="x"
          />
        </div>

        <div style={styles.wrapper}>
          {selectedItems.map((item) => (
            <div style={styles.itemList} key={item.id}>
              <div style={styles.list}>{item.title}</div>
              <div style={{ ...styles.list, ...{ flex: 1 } }}>
                x {item.quantity}
              </div>
              <div style={styles.list}>£{item.price}</div>
            </div>
          ))}
        </div>
        <div style={styles.footer}>
          Total Purchase: £{totalPrice.toFixed(2)}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    justifyContent: 'center',
    gridTemplateAreas: "'a''b''c'",
    gridTemplateRows: '100px 80% 80%',
    minHeight: 300,
    overflow: 'scroll',
  },
  header: {
    gridArea: 'a',
    display: 'flex',
    justifyContent: 'center',
    color: colors.dark,
    fontSize: 24,
    margin: 20,
  },
  wrapper: {
    gridArea: 'b',
    fontSize: 18,
    fontWeight: 600,
    marginRight: 20,
    marginLeft: 20,
    overflow: 'scroll',
  },
  itemList: {
    display: 'flex',
    marginTop: 10,
  },
  list: {
    marginRight: 10,
  },
  footer: {
    gridArea: 'c',
    display: 'grid',
    justifyContent: 'center',
    color: colors.dark,
    fontSize: 20,
    fontWeight: 600,
    width: 300,
    marginTop: 40,
  },
};
