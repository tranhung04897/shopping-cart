var initialState = [
  {
    id: 1,
    name: 'Iphone 11',
    images: '',
    description: 'San pham moi',
    price: 500,
    inventory: 10,
    rating: 4
  },
  {
    id: 2,
    name: 'Iphone 12',
    images: '',
    description: 'San pham moi chua ra',
    price: 1500,
    inventory: 15,
    rating: 5
  },
  {
    id: 3,
    name: 'Iphone 13',
    images: '',
    description: 'San pham moi chuan bi ra',
    price: 2500,
    inventory: 15,
    rating: 3
  },
];

const products = (state = initialState, action)=> {
  switch(action.types) {
    default: return [...state];
  }
}

export default products;