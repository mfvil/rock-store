import '@/assets/style.css'
import { ctx } from '@/context/useContext'
// import { StateInterface } from '@/globalTypes'
import { initialState, reducerFn } from '@/reducer'
import { AppProps } from 'next/app'
import { useReducer, useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  //const [state, setState] = useState<StateInterface>({ products: [] })
  const [state, dispatch] = useReducer(reducerFn, initialState)
  console.log('state', state)
  useEffect(() => {
    async function getProducts() {
      try {
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        dispatch({ type: 'FETCH_PRODUCTS', payload: data })
      } catch (error) {
        console.error(error)
      }
    }

    getProducts()
  }, [])
  return (
    <ctx.Provider value={{ ...state, dispatch }}>
      <Component {...pageProps} />
    </ctx.Provider>
  )
}

export default MyApp
