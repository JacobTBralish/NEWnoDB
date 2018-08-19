let foodList = [
    {
        name: 'Boneless Chicken breast',
        serving: 1 + 'oz',
        protein: 5.5 + 'g',
        calories: 28,
        carbohydrates: 0 + 'g',
        fats: .08 + 'g',
        id: 1
    },
    {
        name: 'Ground Beef 93/7', 
        serving: 1 + 'oz', 
        protein: 8.3 + 'g',
        calories: 59.3,
        carbohydrates: 0 + 'g',
        fats: 2.7 + 'g',
        id: 2,
    },
   
    {
        name: 'Ground Turkey 99%', 
        serving: 1 + 'oz', 
        protein: 7 + 'g',
        calories: 30,
        carbohydrates: 0 + 'g',
        fats: 0.3 + 'g',
        id: 3,
    },
   
    {
        name: 'Jasmine Rice', 
        serving: .25 + 'cup', 
        protein: 1 + 'g',
        calories: 51.25,
        carbohydrates: 11.25 + 'g',
        fats: .04 + 'g',
        id: 4,
    },
   
    {
        name:'Ground Bison 90/10', 
        serving: 1 + 'oz', 
        protein: 5.8 + 'g',
        calories: 55,
        carbohydrates: 0 + 'g',
        fats: 2.8 + 'g',
        id: 5,
    },
   
    {
        name: 'Salmon', 
        serving: 1 + 'oz', 
        protein: 6.2 + 'g',
        calories: 57.7,
        carbohydrates: 0 + 'g',
        fats: 3.5 + 'g',
        id: 6,
    },
   
    {
        name: 'Sweet Potato', 
        serving: 1 + 'oz', 
        protein: 0.6 + 'g',
        calories: 25.2,
        carbohydrates: 5.8 + 'g',
        fats: 0 +'g',
        id: 7,
    },
   
    {
        name: 'Russet Potato', 
        serving: 1 + 'oz', 
        protein: 0.7 + 'g',
        calories: 27.2,
        carbohydrates: 6 + 'g',
        fats: 0 + 'g',
        id: 8,
    },
   
    {
        name: 'Baby Carrot', 
        serving: 1 + 'oz', 
        protein: 0.2 + 'g',
        calories: 9.8,
        carbohydrates: 2.3 + 'g',
        fats: 0 + 'g',
        id: 9,
    },
   
    {
        name: 'Broccoli', 
        serving: 1 + 'oz', 
        protein: 0.8 + 'g',
        calories: 9.5,
        carbohydrates: 1.9 + 'g',
        fats: 0.1 + 'g',
        id: 10,
    },
   
    {
        name: 'Whole Egg (Large)', 
        serving: 1 + 'egg', 
        protein: 6.8 + 'g',
        calories: 102,
        carbohydrates: 1.3 + 'g',
        fats: 5 + 'g',
        id: 11,
    },
   
    {
        name: 'Egg White', 
        serving: 1 + 'egg', 
        protein: 4 + 'g',
        calories: 16,
        carbohydrates: 0 + 'g',
        fats: 0 + 'g',
        id: 12,
    },
    {
        name: 'Green Bell Pepper', 
        serving: 1 + 'pepper', 
        protein: 1 + 'g',
        calories: 32,
        fats: 0.2 + 'g',
        carbohydrates: 7.6 + 'g',
        id: 13,
    },
    {
        name: 'Brown Rice Pasta', 
        serving: 0.5 + 'cup', 
        protein: 2.7 + 'g',
        calories: 112,
        carbohydrates: 27 + 'g',
        fats: 1.4 + 'g',
        id: 14,
    },
    {
        name: 'Oatmeal', 
        serving: .5 + 'cup', 
        protein: 2.9 + 'g',
        calories: 84,
        carbohydrates: 14 + 'g',
        fats: 1.8 + 'g',
        id: 15,
    },
    {
        name: 'Fage Total 0% Plain Greek Yogurt', 
        serving: 227 + 'g', 
        protein: 24 + 'g',
        calories: 134,
        carbohydrates: 9.3 + 'g',
        fats: 0 + 'g',
        id: 16,
    }]

    let id = 17;

    module.exports = {
        getAllFoods: (req, res) => {
            console.log(req.body)
            res.status(200).send(foodList)
        },
        
        createFood: (req, res) => { console.log(req.body)
            let { foodName, calories, protein, carbohydrates, fats } = req.body
            let newFood = {
                foodName,
                calories,
                protein,
                carbohydrates,
                fats,
                id 
            }
            id++
            foodList.push(newFood)
            res.status(200).send(foodList)
        },
    }