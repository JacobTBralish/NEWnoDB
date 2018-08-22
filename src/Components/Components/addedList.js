import React from 'react';

const List = props => {
  console.log(props.foodList);
  let myFood = props.foodList.map((e, index) => <li key={index}>{e.name}</li>)
  console.log(myFood)
  return(
    <div className='listBackground'>
  <ul>
    
      {myFood}
    
  </ul>
  </div>)
};

export default List;