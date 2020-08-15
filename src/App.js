import React from 'react';
import './App.css';

import FrontPage from './Pages/FrontPage';
import AppMenu from './Components/AppMenu';

export default function App() {
  return (
    <div style={styles.container}>
      <h1>This is Front Page for CSS Grid</h1>
      {/* <FrontPage /> */}
      <AppMenu />
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    justifyContent: 'center',
    backgroundColor: 'red',
    width: '100vw',
    height: '100vh',
  },
};
