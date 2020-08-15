import React from 'react';
import TillAppMenuButton from './TillAppMenuButton';
import colors from '../../config/colors';

export default function TillAppMenu() {
  return (
    <div style={StyleSheet.container}>
      <h1>Menu</h1>
      <div>
        <TillAppMenuButton icon="user" buttonColor={colors.secondary} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
  },
};
