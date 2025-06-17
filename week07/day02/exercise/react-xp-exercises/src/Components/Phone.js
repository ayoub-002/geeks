import React, { useState } from 'react';

function Phone() {
  const [phone, setPhone] = useState({
    brand: 'Samsung',
    model: 'Galaxy S20',
    color: 'black',
    year: 2020,
  });

  const changeColor = () => {
    setPhone({ ...phone, color: 'blue' });
  };

  return (
    <div>
      <h2>My phone is a {phone.color} {phone.brand} {phone.model} from {phone.year}</h2>
      <button onClick={changeColor}>Change color to blue</button>
    </div>
  );
}

export default Phone;
