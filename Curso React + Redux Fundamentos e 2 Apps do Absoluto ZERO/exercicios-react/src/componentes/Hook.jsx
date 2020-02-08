import React, { useState, useEffect } from 'react';

export default props => {
  const [contador, setContador] = useState(10);
  const [status, setStatus] = useState('par');

  useEffect(() => {
    setStatus(contador % 2 === 0 ? 'par' : 'impar');
  }, [contador])

  const incrementar = () => {
    setContador(contador + 1);
  }

  const decrementar = () => {
    setContador(contador - 1);
  }

  return (
    <div>
      <h1>{contador}</h1>
      <h3>{status}</h3>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </div>
  )
}