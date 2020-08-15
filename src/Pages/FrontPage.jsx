import React from 'react';
import DeviceScreen from '../Components/DeviceScreen';
import colors from '../config/colors';

export default function FrontPage() {
  return (
    <div style={styles.container}>
      <div style={{ gridArea: 'a' }}>
        <DeviceScreen width={375} height={812}>
          <p>iPhone x</p>
        </DeviceScreen>
      </div>
      <div style={{ gridArea: 'b' }}>
        <DeviceScreen width={375} height={667}>
          <p>iPhone 8</p>
        </DeviceScreen>
      </div>
      <div style={{ gridArea: 'c' }}>
        <DeviceScreen width={320} height={568}>
          <p>iPhone SE</p>
        </DeviceScreen>
      </div>
      <div style={{ gridArea: 'd' }}>
        <DeviceScreen width={768} height={1024}>
          <p>iPad</p>
        </DeviceScreen>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    gridTemplateAreas: "'c a b ''d d d'",
    backgroundColor: colors.light,
    height: '100%',
  },
};
