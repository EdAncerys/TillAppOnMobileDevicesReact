import React, { useState, useContext } from 'react';
import { TillAppContext } from './TillAppContext';
import Button from '../Button';

export default function TillAppFooterMenu() {
  const { setPrintReceipt } = useContext(TillAppContext);

  const handlePrint = () => {
    setPrintReceipt(true);
    setTimeout(() => {
      setPrintReceipt(false);
    }, 2000);
  };

  return (
    <div style={styles.container} onClick={() => handlePrint()}>
      <Button title="Print Receipt" />
    </div>
  );
}

const styles = {
  container: {
    width: '60vw',
    padding: 10,
  },
};
