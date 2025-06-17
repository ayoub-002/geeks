import React, { useState } from 'react';

function Events() {
  const clickMe = () => {
    alert('I was clicked');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      alert(`You typed: ${e.target.value}`);
    }
  };

  const [isToggleOn, setIsToggleOn] = useState(true);
  const toggle = () => setIsToggleOn(!isToggleOn);

  return (
    <div>
      <h2>Events</h2>
      <button onClick={clickMe}>Click me</button>
      <br /><br />
      <input type="text" onKeyDown={handleKeyDown} placeholder="Type and press Enter" />
      <br /><br />
      <button onClick={toggle}>{isToggleOn ? 'ON' : 'OFF'}</button>
    </div>
  );
}

export default Events;
