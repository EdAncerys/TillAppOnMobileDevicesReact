import React, { useContext } from 'react';
import { TillAppContext } from '../TillAppContext';
import colors from '../../../config/colors';

export default function PrintReceiptScreen() {
  const { totalPrice, selectedItems } = useContext(TillAppContext);

  return (
    <div>
      <div style={styles.backGround}> </div>
      <div style={styles.container}>
        <div style={styles.header}>Receipt</div>
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
    gridTemplateAreas: "'a a a''b b b''c c c'",
    gridTemplateRows: '150px auto 100px',
    width: '100%',
    overflow: 'scroll',
  },
  header: {
    gridArea: 'a',
    display: 'grid',
    justifyContent: 'center',
    color: colors.dark,
    fontSize: 24,
    fontWeight: 600,
    margin: 20,
  },
  wrapper: {
    gridArea: 'b',
    fontSize: 18,
    fontWeight: 600,
    flex: 1,
    marginRight: 20,
    marginLeft: 20,
    overflow: 'scroll',
  },
  itemList: {
    display: 'flex',
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
    margin: 20,
  },
};
