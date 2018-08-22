import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FoodCard from './Components/Components/FoodCard';
import List from './Components/Components/addedList';
// const fT = require('./Components/Components/resetList');



class App extends Component {
  constructor() {
    super();
      this.state = {
      input:'',
      foodArr: [],
      OneItem: {},
      image:'',
      foodName: '',
      newServing: '',
      calories: '',
      protein: '',
      carbohydrates: '',
      fats: '',
      foodList: []
      }
      //bound this to the handlePost method allowing to get rid of the empty object returned with the empty foodArr.
      this.addFood = this.addFood.bind(this)
      this.handlePost = this.handlePost.bind(this);
      this.handeEdit = this.handleEdit.bind(this);
      this.editServing = this.editServing.bind(this);
      this.deleteFood = this.deleteFood.bind(this);
      this.reset = this.reset.bind(this);
  }
//Displays my foodList on the localhost
componentDidMount(){
  axios.get('/api/foodList').then( res =>{
    // console.log(res.data)
    this.setState({
      foodArr: res.data
    })
  }) 
  .catch(err => console.log(err))
}

// getOneItem( name ) {axios.get(`api/foodList/${ name }}`, findOneItem).then( res => {
//   this.setState({
//     oneItem: res.data
//   })
// })
// }

//allows for the button to create a new object of foodname, cals, carbs, proteins,fats.
handlePost(name, calories, protein, carbohydrates, fats){
  // let { foodName, calories, protein, carbohydrates, fats } = this.state;
  axios.post('/api/foodList', {name, calories, protein, carbohydrates, fats}).then(res => {
    console.log(res.data)
  this.setState({
    foodArr: res.data
  
  })
})
.catch(err => console.log(err))
}

handleEdit ( editFood, id ) {
  // console.log(editFood)
  axios.put(`/api/foodList/${ id }`, {editFood}).then (res => {
    // console.log(res.data)
    // this.setState({
    //   foodArr:res.data
    })
    .catch(err => console.log(err))
  // })
}
addFood (id) {
  // console.log('hello')
  console.log(id)
  axios.get(`/api/foodList/${ id }`).then(res => {
   this.setState({
     foodList: [...this.state.foodList,res.data]
   })
  })
  .catch(err => console.log(err))
}

editServing (event){
  // console.log(event.target.value)
    this.setState({
      newServing: event.target.value
    })
  }

deleteFood ( id ) {
    axios.delete(`/api/foodList/${ id }`).then(res =>{
      console.log(res);
      
      this.setState({
        foodArr:res.data
      })
    })
    .catch(err => console.log(err))
  }

  reset(){
    axios.get('/api/resetList/reset').then( res =>{
      // console.log(res.data)
      this.setState({
        foodArr: res.data
      })
    }) 
    .catch(err => console.log(err))
  }

  
//used for allowing the inputs to work
handleInput(key,val){
  this.setState({
    [key]: val
  })
}


//used for search bar
handleChange( filter ) {
  this.setState({ input: filter })
}




onChange = (event) => {
  this.setState({input: event.target.value});
}

onSubmit = (event) => {
  // event.preventDefault();
  this.setState({
    // input: '',
    foodList: [...this.state.foodList, this.state.input]
  });
}




  render() {
    // console.log(this.state.foodArr)

    let { input, foodArr ,foodName, calories, protein, carbohydrates, fats } = this.state

    // search bar
    let mappedList = foodArr.filter( (element, index) => {
      return (element.name).includes( input );
       }).map( (element, index) => {
      return <h2 key={ index }>{ <FoodCard
        addFood={this.addFood}id={element.id}
        editServing={this.editServing}{...element}
        handleEdit={this.handleEdit}
        newServing={this.state.newServing}
        deleteFood={this.deleteFood}/> }</h2>
    })



    return (
      <div className="App">

      <header>
      {/* search bar */}
      <input className='searchbar' placeholder={'Search...'} onChange={ ({target}) => this.handleChange( target.value ) } type="text" />
        {/* { foodsToDisplay } */}

      <h1 className='title'> Food Tracker</h1>

      </header>
                
                <div className='addFood'>
         
            
              <div>
                <input type='text'  
                value ={foodName}
                placeholder="Name"
                onChange={e => this.handleInput('foodName', e.target.value)}
                className='addFoodInput'/>
              </div>
            
              <div>
                <input type='text' 
                value = {calories}
                placeholder="Calories"
                onChange={e => this.handleInput('calories', e.target.value)}
                className='addFoodInput'/>
              </div>
              <div>
                <input type='text' 
                value = {protein}
                placeholder="Protein"
                onChange={e => this.handleInput('protein', e.target.value)}
                className='addFoodInput'/>
              </div>
              <div>
                <input type='text' 
                value = {carbohydrates}
                placeholder="Carbohydrates"
                onChange={e => this.handleInput('carbohydrates', e.target.value)}
                className='addFoodInput'/>
              </div>
              <div>
                <input type='text' 
                value = {fats}
                placeholder="Fats"
                onChange={e => this.handleInput('fats', e.target.value)}
                className='addFoodInput'/>
              
              
              </div>
            <div>
                <button className='topButtons' onClick={() => this.handlePost(foodName, calories, protein, carbohydrates, fats)} >Add</button>
                <button className='topButtons' onClick={this.reset}>Reset</button>
           </div>
        </div>
      
      <body>

        <main>

          {mappedList}

        </main>
      
        <div id='shoppinglist'> <h3 id='shoppinglist'>Shopping List</h3> <List classname='list' foodList={this.state.foodList} /* input={this.state.input} *//> </div>

      </body>
        


         
        
       
      </div>
    );
  }
}

export default App;
