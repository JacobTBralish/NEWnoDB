const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fT = require('./Controllers/foodList');

app.use(bodyParser.json());

//STEP2
app.get('/api/foodList',fT.getAllFoods);
// app.get('/api/foodList/?={name}',fT.getOneFood);
app.post('/api/foodList', fT.createFood);
// app.put('/api/foodList/:id', fT.editFood);
// app.delete('/api/foodList/:id', fT.delete);

const port=4000
app.listen(port, () => console.log(`Listening on port ${port}`));

