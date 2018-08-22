import React from 'react';

let FoodCard = (props) => {
    // console.log(props)
    return(
        
        <div className='foodCard'>
           
            <h3 id='cardName'> {props.name} </h3>
       <button onClick={()=>props.addFood(props.id)}>Add to list</button>

            
                <button onClick={() => props.deleteFood( props.id)}>Delete
                 </button>
            
            <p id='cardMacros'>Calories:{props.calories}</p>
            <div>
                <input id='editinputFoodCard' onChange = {event => props.editServing(event)}placeholder={props.serving} /> 
            </div>
            
                <button onClick={() => props.handleEdit( props.newServing, props.id )}>Edit Food</button>
            
            <p id='cardmacrosProtein'>Protein:{props.protein}</p>
            <p id='cardMacros'>Carbohydrates:{props.carbohydrates}</p>
            <p id='cardMacros'>Fats:{props.fats}</p>
        </div>

    )
}

export default FoodCard;