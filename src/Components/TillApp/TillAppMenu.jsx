import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import colors from '../../config/colors';

export default function TillAppMenu() {
  return (
    <div style={StyleSheet.container}>
      <h1>Menu</h1>
      <div>
        <div>
          <FontAwesomeIcon icon="check-square" />
          <FontAwesomeIcon icon="user" size="2x" color={colors.secondary} />
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
  },
};
