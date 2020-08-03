import React from 'react';
import { Link } from 'react-router-dom';
import { Counter } from '../features/counter/Counter';

function CounterPage() {
  return (
    <>
      <h1>Counter</h1>
      <Counter />
      <Link to="/">Home</Link>
    </>
  );
}

export default CounterPage;
