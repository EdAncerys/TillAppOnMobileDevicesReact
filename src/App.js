import React from 'react';
import './config/App.css';
import './config/FontAwesome';

import FrontPage from './Pages/FrontPage';
import TillApp from './Components/TillApp/TillApp';

export default function App() {
  return (
    <div style={styles.container}>
      {/* <h1>This is Front Page for CSS Grid</h1> */}
      <FrontPage />
      {/* <div style={{ width: 800, height: 800, border: '10px solid black' }}>
        <TillApp />
      </div> */}
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    justifyContent: 'center',
  },
};
