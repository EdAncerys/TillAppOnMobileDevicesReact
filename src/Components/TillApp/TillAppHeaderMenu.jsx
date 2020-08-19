import React from 'react';

import TillAppMenuButton from './TillAppMenuButton';
import colors from '../../config/colors';

export default function TillAppHeaderMenu() {
  return (
    <div style={styles.container}>
      <TillAppMenuButton
        icon="hamburger"
        title="Food"
        buttonColor={colors.secondary}
      />
      <TillAppMenuButton title="Food" buttonColor={colors.secondary} />
      <TillAppMenuButton title="Category One" buttonColor={colors.secondary} />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
  },
};
