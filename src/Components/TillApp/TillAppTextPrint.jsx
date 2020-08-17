import React from 'react';

export default function TillAppTextPrint({ title, price }) {
  return (
    <div style={styles.container}>
      <div style={{ ...styles.text, ...{ flex: 1 } }}>{title}</div>
      <div style={styles.text}>£{price}</div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    padding: 0,
  },
  text: {
    marginTop: 5,
  },
};
