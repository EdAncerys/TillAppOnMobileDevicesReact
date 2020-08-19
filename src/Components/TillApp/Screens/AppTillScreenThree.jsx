import React from 'react';
import TillAppMenuButton from '../TillAppMenuButton';
import colors from '../../../config/colors';

const color = colors.dark;

export default function AppTillScreenOne() {
  return (
    <div style={styles.menu}>
      <TillAppMenuButton
        icon="user-tie"
        price={49.99}
        title="Tie"
        buttonColor={color}
      />
      <TillAppMenuButton
        icon="tshirt"
        title="T-shirt"
        price={24.99}
        buttonColor={color}
      />
      <TillAppMenuButton
        icon="socks"
        price={6.99}
        title="Socks"
        buttonColor={color}
      />
      <TillAppMenuButton
        icon="shoe-prints"
        price={124.99}
        title="Shoes"
        buttonColor={color}
      />
      <TillAppMenuButton
        icon="mitten"
        price={20.99}
        title="Gloves"
        buttonColor={color}
      />
      <TillAppMenuButton
        icon="hat-wizard"
        price={15.99}
        title="Hat"
        buttonColor={color}
      />
    </div>
  );
}

const styles = {
  menu: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
};
