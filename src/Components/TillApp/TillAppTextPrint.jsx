import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { TillAppContext } from './TillAppContext';

import colors from '../../config/colors';

export default function TillAppTextPrint({
  title,
  quantity,
  price,
  id,
  color = colors.dark,
}) {
  const { selectedItems, setSelectedItems } = useContext(TillAppContext);

  const handleDelete = (id) => {
    const result = selectedItems.filter((item) => id !== item.id);
    setSelectedItems(result);
  };

  return (
    <div style={styles.container}>
      <div style={{ ...styles.text, ...{ flex: 1, color: color } }}>
        {title}
      </div>
      <div style={{ ...styles.quantity, ...{ color: color } }}>{quantity}</div>
      <div style={{ ...styles.text, ...{ color: color } }}>£{price}</div>
      <FontAwesomeIcon
        style={styles.icon}
        icon="trash-alt"
        color={color}
        onClick={() => handleDelete(id)}
      />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 10,
  },
  text: {
    fontWeight: 500,
    fontSize: 18,
  },
  icon: {
    marginLeft: 10,
  },
  quantity: {
    display: 'grid',
    width: 30,
    height: 30,
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.danger,
    marginRight: 10,
  },
};
