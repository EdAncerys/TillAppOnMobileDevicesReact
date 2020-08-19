import React from 'react';
import TillAppMenuButton from '../TillAppMenuButton';
import colors from '../../../config/colors';

const color = colors.secondary;

export default function AppTillScreenOne() {
  return (
    <div style={styles.menu}>
      <TillAppMenuButton
        icon="beer"
        price={3.99}
        title="Beer"
        buttonColor={color}
      />
      <TillAppMenuButton
        icon="cocktail"
        title="Cocktail"
        price={4.99}
        buttonColor={color}
      />
      <TillAppMenuButton
        icon="glass-cheers"
        price={6.99}
        title="Offer"
        buttonColor={color}
      />
      <TillAppMenuButton
        icon="glass-whiskey"
        price={4.99}
        title="Booze"
        buttonColor={color}
      />
      <TillAppMenuButton
        icon="mug-hot"
        price={1.99}
        title="Coffee"
        buttonColor={color}
      />
      <TillAppMenuButton
        icon="wine-bottle"
        price={15.99}
        title="Bottle"
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
