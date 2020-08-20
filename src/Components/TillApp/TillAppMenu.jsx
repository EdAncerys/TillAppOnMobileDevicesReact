import React, { useContext } from 'react';
import { TillAppContext } from './TillAppContext';
import TillAppScreenOne from './Screens/AppTillScreenOne';
import TillAppScreenTwo from './Screens/AppTillScreenTwo';
import TillAppScreenThree from './Screens/AppTillScreenThree';

export default function TillAppMenu() {
  const { screenOne, screenTwo, screenThree } = useContext(TillAppContext);

  return (
    <div style={styles.container}>
      {screenOne && <TillAppScreenOne />}
      {screenTwo && <TillAppScreenTwo />}
      {screenThree && <TillAppScreenThree />}
    </div>
  );
}

const styles = {
  container: {
    height: 'auto',
    flex: 1,
    overflow: 'scroll',
  },
};
