import React from 'react';
import DeviceScreen from '../Components/DeviceScreen';
import TillApp from '../Components/TillApp/TillApp';

import colors from '../config/colors';

export default function FrontPage() {
  return (
    <div style={styles.container}>
      <div style={{ gridArea: 'a' }}>
        <DeviceScreen width={375} height={812} title="iPhone x">
          <TillApp />
        </DeviceScreen>
      </div>
      <div style={{ gridArea: 'b' }}>
        <DeviceScreen width={375} height={667} title="iPhone 8">
          <TillApp />
        </DeviceScreen>
      </div>
      <div style={{ gridArea: 'c' }}>
        <DeviceScreen width={320} height={568} title="iPhone SE">
          <TillApp />
        </DeviceScreen>
      </div>
      <div style={{ gridArea: 'd' }}>
        <DeviceScreen width={768} height={1024} title="iPad">
          <TillApp />
        </DeviceScreen>
      </div>
      <div style={{ gridArea: 'e' }}>
        <DeviceScreen width={450} height={600} title="Surface Duo">
          <TillApp />
        </DeviceScreen>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    gridTemplateAreas: "'c a b ''d d e'",
    backgroundColor: colors.light,
    width: '100vw',
    height: '100%',
  },
};
