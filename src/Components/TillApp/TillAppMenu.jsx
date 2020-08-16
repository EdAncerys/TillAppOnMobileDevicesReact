import React from 'react';
import TillAppMenuButton from './TillAppMenuButton';
import colors from '../../config/colors';

export default function TillAppMenu({ totalPrice, setTotalPrice }) {
  return (
    <div>
      <div style={styles.menu}>
        <TillAppMenuButton icon="user" price={1.99} title="Latte" />
        <TillAppMenuButton icon="user" buttonColor={colors.secondary} />
        <TillAppMenuButton icon="user" buttonColor={colors.secondary} />
        <TillAppMenuButton icon="user" buttonColor={colors.secondary} />
      </div>
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
