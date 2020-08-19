import React, { useContext } from 'react';
import { TillAppContext } from './TillAppContext';

import TillAppMenuButton from './TillAppMenuButton';
import colors from '../../config/colors';

export default function TillAppHeaderMenu() {
  const { setScreenOne, setScreenTwo, setScreenThree } = useContext(
    TillAppContext
  );

  return (
    <div style={styles.container}>
      <div
        onClick={() => {
          setScreenOne(true);
          setScreenTwo(false);
          setScreenThree(false);
        }}
      >
        <TillAppMenuButton
          icon="hamburger"
          title="Food"
          buttonColor={colors.secondary}
        />
      </div>
      <div
        onClick={() => {
          setScreenOne(false);
          setScreenTwo(true);
          setScreenThree(false);
        }}
      >
        <TillAppMenuButton
          title="Drinks"
          icon="glass-martini"
          buttonColor={colors.secondary}
        />
      </div>
      <div
        onClick={() => {
          setScreenOne(false);
          setScreenTwo(false);
          setScreenThree(true);
        }}
      >
        <TillAppMenuButton
          title="Clothing"
          icon="hat-cowboy"
          buttonColor={colors.secondary}
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
  },
};
