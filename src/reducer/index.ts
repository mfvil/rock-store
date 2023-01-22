import { StateInterface, ActionInterface } from '@/globalTypes'
import { useReducer } from 'react'

export const initialState: StateInterface = {
  products: [],
  shoppingCart: [],
}

export const reducerFn = (state: StateInterface, action: ActionInterface) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return { ...state, products: action.payload }
    case 'ADD_TO_CART':
      return { ...state, shoppingCart: [...state.shoppingCart, action.payload] }
      console.log(shopingCart)
    default:
      return state
  }
}
