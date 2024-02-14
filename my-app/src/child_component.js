import React from 'react';

function Child(props) {
  return (
    <div>

      <h3>Child Component</h3>
      <p> message form parent : {props.message}</p>
    </div>
  );
}

export default Child;