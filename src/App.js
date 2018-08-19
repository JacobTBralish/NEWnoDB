import React, { Component } from 'react';
import './App.css';
import axios from 'axios'



class App extends Component {
  constructor() {
    super();
      this.state = {
      foodArr: [],
      updatedFood: {},
      foodName: '',
      calories: '',
      protein: '',
      carbohydrates: '',
      fats: '',
      // edit: false
      }
      //bound this to the handlePost method allowing to get rid of the empty object returned with the empty foodArr.
      this.handlePost = this.handlePost.bind(this);
      // this.updatedFood = this.updatedFood.bind(this);
  }
//Displays my foodList on the localhost
componentDidMount(){
  axios.get('/api/foodList').then( res =>{
    console.log(res.data)
    this.setState({
      foodArr: res.data
    })
  }) 
}
//allows for the button to create a new object of foodname, cals, carbs, proteins,fats.
handlePost(foodName, calories, protein, carbohydrates, fats){
  // let { foodName, calories, protein, carbohydrates, fats } = this.state;
  axios.post('/api/foodList', {foodName, calories, protein, carbohydrates, fats}).then(res => {
    console.log(res.data)
  this.setState({
    foodArr: res.data
  
  })
})}

handleEdit(editFood){
  axios.patch('/api/foodList/:id', editFood).then (res => {
    console.log(res.data)
    this.setState({
      updatedFood: res.data
    })
  })
}

handleUserInput ({target}) {
  const foodName = target.foodName;
  const calories = target.calories;
  const protein = target.protein;
  const carbohydrates = target.carbohydrates;
  const fats = target.fats;
  const value = target.value
  this.setState({[foodName]: value,
                  [calories]: value,
                  [protein]: value,
                  [carbohydrates]: value,
                  [fats]: value})
}

  render() {
    console.log(this.state.foodArr)

    let { updatedFood, foodArr, foodName, calories, protein, carbohydrates, fats } = this.state

    let mapped = foodArr.map(e => {
      return <div key={ e.id }>
        {e.name}
      </div>
    })
    return (
      <div className="App">
      {mapped}


        <div className='updateFood'>
          {editName ?
            <div>
              <input type='text' 
              name = 'Name' 
              value = {this.state.foodName}>Name</input>
              
            </div>
          }
            <div>
              <input type='text' 
              name = 'Calories' 
              value = {this.state.calories}>Calories</input>
            </div>
            <div>
              <input type='text' 
              name = 'Protein' 
              value = {this.state.protein}>Protein</input>
            </div>
            <div>
              <input type='text' 
              name = 'Carbohydrates' 
              value = {this.state.carbohydrates}>Carbohydrates</input>
            </div>
            <div>
              <input type='text' 
              name = 'Fats' 
              value = {this.state.fats}>Fats</input>
              
            </div>
        </div>


    
        <button onClick={() => this.handlePost(foodName, calories, protein, carbohydrates, fats)}>Add</button>
          <input></input>
        <button onClick={() => this.handleEdit(foodName, calories, protein, carbohydrates, fats)}>Edit</button>
      </div>
    );
  }
}

export default App;
