import React from 'react';
import colors from '../../config/colors';
import TillAppMenuButton from './TillAppMenuButton';
import Button from '../Button';

export default function TillAppFooterMenu() {
  return (
    <div style={styles.container}>
      <Button />
      {/* <TillAppMenuButton title="Print Receipt" height={50} width={180} /> */}
    </div>
  );
}

const styles = {
  container: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 600,
    border: 'white',
  },
};
