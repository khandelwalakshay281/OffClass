import React, { useState, useEffect } from 'react';

const Payment_gate = () => {
  const [color, setColor] = useState('red');

  useEffect(() => {
    const interval = setInterval(() => {
      setColor(prevColor => prevColor === 'red' ? 'green' : 'red');
    }, 1000); // Change color every 1 second

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  return (
    <div style={{ backgroundColor: color, padding: '10px', color: 'white' }}>
      Pay Fee Online
    </div>
  );
}

export default Payment_gate;
