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
      <TillAppMenuButton
        title="Drinks"
        icon="glass-martini"
        buttonColor={colors.secondary}
      />
      <TillAppMenuButton
        title="Clothing"
        icon="hat-cowboy"
        buttonColor={colors.secondary}
      />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
  },
};
