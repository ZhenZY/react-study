import React from 'react';

function ListItem(props) {
  return <li>{props.value}</li>
}

function List(props) {

  const numbers = props.numbers;
  const listItems = numbers.map((number) => 

   // key 值无法通过 props.key 读取
    <ListItem key={number.toString()}
      value={number} />
  );
  
  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
};

export default List;
