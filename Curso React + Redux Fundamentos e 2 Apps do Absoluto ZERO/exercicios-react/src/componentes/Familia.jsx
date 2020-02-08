import React from 'react';
import { filhosComProps } from '../utils/utils';

export default props => 
  <div>
    <h1>Familia</h1>

    {/* TODOS OS ELEMENTOS QUE FOREM PASSADOS ENTRE AS TAG DO COMPONENTE */}
    {/* {props.children} */}

    {filhosComProps(props)}
  </div>