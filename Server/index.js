const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fT = require('./Controllers/foodList');

app.use(bodyParser.json());

//STEP2
app.get('/api/foodList',fT.getAllFoods);
// app.get('/api/foodList/?={name}',fT.getOneItem);
app.post('/api/foodList', fT.createFood);
app.get('/api/foodList/:id', fT.addFood);
app.put('/api/foodList/:id', fT.editFood);
app.delete('/api/foodList/:id', fT.deleteFood);
app.get('/api/resetList/reset', fT.resetList)

const port=4000
app.listen(port, () => console.log(`Listening on port ${port}`));

