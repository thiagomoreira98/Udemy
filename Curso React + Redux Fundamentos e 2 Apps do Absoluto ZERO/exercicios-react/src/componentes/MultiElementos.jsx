import React from 'react';

// PROBLEMA
// export default props =>
//   <h1>Parte 1</h1>
//   <h2>Parte 2</h2>

// SOLUCAO 1 - Mais usada
// export default props =>
//   <div>
//     <h1>Parte 1</h1>
//     <h2>Parte 2</h2>
//   </div>

// SOLUCAO 2 - Fragment
// export default props =>
//   <React.Fragment>
//     <h1>Parte 1</h1>
//     <h2>Parte 2</h2>
//   </React.Fragment>

// SOLUCAO 3
export default props =>
  <>
    <h1>Parte 1</h1>
    <h2>Parte 2</h2>
  </>

// SOLUCAO 4 - Array
// export default props => [
//   <h1>Parte 1</h1>,
//   <h2>Parte 2</h2>
// ]