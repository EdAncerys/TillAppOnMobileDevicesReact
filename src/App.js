import React from 'react';
import './config/App.css';
import './config/FontAwesome';

import FrontPage from './Pages/FrontPage';

export default function App() {
  return (
    <div style={styles.container}>
      <FrontPage />
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    justifyContent: 'center',
  },
};
