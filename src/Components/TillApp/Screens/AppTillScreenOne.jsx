import React from 'react';
import TillAppMenuButton from '../TillAppMenuButton';
import colors from '../../../config/colors';

const color = colors.primary;

export default function AppTillScreenOne() {
  return (
    <div style={styles.menu}>
      <TillAppMenuButton
        icon="coffee"
        price={1.99}
        title="Latte"
        buttonColor={color}
      />
      <TillAppMenuButton
        icon="apple-alt"
        title="Fruit"
        price={0.99}
        buttonColor={color}
      />
      <TillAppMenuButton
        icon="bread-slice"
        price={4.99}
        title="Sandwich"
        buttonColor={color}
      />
      <TillAppMenuButton
        icon="candy-cane"
        price={1.99}
        title="Candy"
        buttonColor={color}
      />
      <TillAppMenuButton
        icon="carrot"
        price={4.99}
        title="Carrot"
        button
        Color={color}
      />
      <TillAppMenuButton
        icon="cheese"
        price={2.99}
        title="Cake"
        buttonColor={color}
      />
      <TillAppMenuButton
        icon="cookie"
        price={1.99}
        title="Cookie"
        buttonColor={color}
      />
      <TillAppMenuButton
        icon="drumstick-bite"
        price={4.99}
        title="Chicken"
        buttonColor={color}
      />
      <TillAppMenuButton
        icon="pizza-slice"
        price={3.99}
        title="Pizza"
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
