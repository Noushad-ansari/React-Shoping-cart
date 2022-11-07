import React, { createContext,useReducer,useContext } from 'react';
import { faker } from '@faker-js/faker';
import {cartReducer} from './Reducers'

const Cart = createContext();

const Context = ({ children }) => {

  const products = Array.from({ length: 20 }).map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.product(),
    price: Math.round(faker.commerce.price()),
    image: faker.image.image(),
    inStock: faker.helpers.shuffle([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.shuffle([1,2,3,4,5]),
  }));
  // console.log(products)

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  return (
    <Cart.Provider value={{state,dispatch}}>
      {children}
    </Cart.Provider>
  )
}

export const CartState = () => {
  return useContext(Cart);
};


export default Context