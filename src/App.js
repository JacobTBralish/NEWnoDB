import React, { Component } from 'react';
import './App.css';
import axios from 'axios'



class App extends Component {
  constructor() {
    super();
      this.state = {
      foodArr: [],
      foodName: '',
      calories: '',
      protein: '',
      carbohydrates: '',
      fats: ''
      }

      this.handlePost = this.handlePost.bind(this);
  }

componentDidMount(){
  axios.get('/api/foodList').then( res =>{
    console.log(res.data)
    this.setState({
      foodArr: res.data
    })
  }) 
}

handlePost(foodName, calories, protein, carbohydrates, fats){
  // let { foodName, calories, protein, carbohydrates, fats } = this.state;
  axios.post('/api/foodList', {foodName, calories, protein, carbohydrates, fats}).then(res => {
    console.log(res.data)
  this.setState({
    foodArr: res.data
  
  })
})}

  render() {console.log(this.state.foodArr)


    let { foodArr, foodName, calories, protein, carbohydrates, fats } = this.state

    let mapped = foodArr.map(e => {
      return <div key={ e.id }>
        {e.name}
      </div>
    })
    return (
      <div className="App">
      {mapped}
      <button onClick={() => this.handlePost(foodName, calories, protein, carbohydrates, fats)}>Push me</button>
      </div>
    );
  }
}

export default App;
