import React, { useContext, useState } from 'react';
import { TillAppContext } from './TillAppContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import colors from '../../config/colors';

export default function TillAppMenuButton({
  icon,
  price,
  title = 'Title',
  buttonColor = colors.primary,
  iconColor = colors.white,
  width = 80,
  height = 80,
}) {
  const {
    totalPrice,
    setTotalPrice,
    selectedItems,
    setSelectedItems,
  } = useContext(TillAppContext);
  const [hover, setHover] = useState(false);

  const handleDuplicate = () => {
    const duplicate = selectedItems.filter((item) => item.title !== title);
    if (selectedItems.length === duplicate.length) return true;
  };

  const handleQuantity = () => {
    selectedItems.map((item) => {
      if (item.title === title) item.quantity += 1;
    });
  };

  const addItem = () => {
    if (handleDuplicate()) {
      setSelectedItems([
        ...selectedItems,
        {
          title: title,
          price: price,
          quantity: 1,
          id: new Date().valueOf(),
        },
      ]);
    } else {
      handleQuantity();
    }
  };

  const handleAddItem = () => {
    if (price) setTotalPrice(totalPrice + price);
    if (price && title) addItem();
  };

  return (
    <div
      style={{
        cursor: hover ? 'pointer' : '',
        display: 'grid',
        width: width,
        height: height,
        borderRadius: width / 3,
        backgroundColor: hover ? colors.medium : buttonColor,
        padding: 5,
        margin: 20,
        justifyContent: 'center',
      }}
      onClick={() => handleAddItem()}
      onMouseEnter={() => setHover(!hover)}
      onMouseLeave={() => setHover(!hover)}
    >
      <div
        style={{
          display: 'grid',
          alignItems: 'center',
          justifyItems: 'center',
        }}
      >
        {icon && <FontAwesomeIcon icon={icon} size="2x" color={iconColor} />}
      </div>
      <div
        style={{
          display: 'grid',
          justifyItems: 'center',
        }}
      >
        <p
          style={{
            color: iconColor,
            margin: 0,
            textTransform: 'uppercase',
            textAlign: 'center',
          }}
        >
          {title}
        </p>
        <p
          style={{
            color: iconColor,
            margin: 0,
          }}
        >
          {price && `£ ${price}`}
        </p>
      </div>
    </div>
  );
}
