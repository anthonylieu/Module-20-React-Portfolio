import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1992-08-20T09:24:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'book',
    label: 'Current favorite book',
    value: 'Project Hail Mary',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Charlotte, NC',
  },
  {
    key: 'typespeed',
    label: 'Current typing speed',
    value: '140 WPM',
  },
  {
    key: 'caffine',
    label: 'Current daily caffeine intake',
    value: 'Too much',
  },
];

export default data;
