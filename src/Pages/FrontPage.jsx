import React from 'react';
import DeviceScreen from '../Components/DeviceScreen';
import colors from '../config/colors';

export default function FrontPage() {
  return (
    <div style={styles.container}>
      <div style={{ grodArea: 'b' }}>
        <DeviceScreen width={375} height={667}>
          <p>iPhone 8</p>
        </DeviceScreen>
      </div>
      <div style={{ grodArea: 'b' }}>
        <DeviceScreen width={375} height={667}>
          <p>iPhone 8</p>
        </DeviceScreen>
      </div>
      <div style={{ grodArea: 'a' }}>
        <DeviceScreen width={320} height={568}>
          <p>iPhone SE</p>
        </DeviceScreen>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    gridTemplateAreas: "'a''a''b'",
    backgroundColor: colors.light,
  },
};
