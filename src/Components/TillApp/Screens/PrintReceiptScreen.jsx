import React, { useContext } from 'react';
import { TillAppContext } from '../TillAppContext';
import colors from '../../../config/colors';

export default function PrintReceiptScreen() {
  const { totalPrice, selectedItems } = useContext(TillAppContext);

  return (
    <div>
      <div style={styles.backGround}> </div>
      <div style={styles.container}>
        <div style={styles.receipt}>
          <div style={styles.header}>Receipt</div>
          <div style={styles.wrapper}>
            {selectedItems.map((item) => (
              <div style={styles.itemList}>
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
    </div>
  );
}

const styles = {
  backGround: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: colors.white,
    opacity: '0.8',
  },
  container: {
    position: 'absolute',
    display: 'grid',
    width: '100vw',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
  receipt: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '60vw',
    height: '60vh',
    maxWidth: 400,
    maxHeight: 800,
    overflow: 'scroll',
    backgroundColor: colors.light,
  },
  header: {
    display: 'grid',
    justifyContent: 'center',
    color: colors.dark,
    fontSize: 24,
    fontWeight: 600,
    margin: 20,
  },
  wrapper: {
    display: 'grid',
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
    display: 'grid',
    justifyContent: 'center',
    color: colors.dark,
    fontSize: 20,
    fontWeight: 600,
    margin: 20,
  },
};
