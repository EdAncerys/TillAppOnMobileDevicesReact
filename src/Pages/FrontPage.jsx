import React from 'react';
import DeviceScreen from '../Components/DeviceScreen';

export default function FrontPage() {
  return (
    <div style={styles.container}>
      <DeviceScreen width={375} height={667}>
        <p>iPhone 8</p>
      </DeviceScreen>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    justifyContent: 'center',
  },
};
