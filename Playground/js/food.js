const FOOD_THOUGHTS = {
    'sushi': 30,
    'steak': 100
}

const getFoodThoughtKeys = ()=> {
    return Object.keys(FOOD_THOUGHTS)
}

const getFoodThoughtValues = ()=> {
    return Object.values(FOOD_THOUGHTS)
}

export {getFoodThoughtKeys, getFoodThoughtValues}