const ADD_REQUEST = 'ADD-REQUEST'

let initialState = {
  pizza: [
    {name: 'Ветчина и грибы', img: '/img/pizza/Ham and mushrooms.webp', price: 299 },
    {name: '10 Сыров', img: '/img/pizza/10 cheeses.webp', price: 299 },
    {name: 'Цыпленок Барбекю', img: '/img/pizza/Chicken BBQ.webp', price: 349 },
    {name: 'Сырная', img: '/img/pizza/Cheese.webp', price: 259 },
    {name: 'Пицца с красной рыбой', img: '/img/pizza/Pizza with red fish.webp', price: 699 },
    {name: 'Любимая Карбонара', img: '/img/pizza/Favorite Carbonara.webp', price: 259 },
    {name: 'Свинина в кисло-сладком соусе', img: '/img/pizza/Pork in sweet and sour sauce.webp', price: 299 },
    {name: 'Итальянская с моцареллой и пепперони', img: '/img/pizza/Italian with mozzarella and pepperoni.webp', price: 459 },
  ]
}

const MenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REQUEST:
      return state;
    default:
      return state;
  }
}

export const addRequest = (company, ati, fullName, tel, comment) => (dispatch) => {
  const newRequest = {}
  dispatch({ type: ADD_REQUEST, newRequest: newRequest})
};

export default MenuReducer