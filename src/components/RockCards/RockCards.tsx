import { ctx } from '@/context/useContext'
import { StateInterface } from '@/globalTypes'
import useCounter from '@/hooks/useCounter'
import React from 'react'
import { useContext } from 'react'

const RockCards = (): JSX.Element => {
  const { products, dispatch } = useContext<StateInterface>(ctx)
  // const [items, setItems] = useState(0)

  // const Counter = ({ post }: { post: Post }) => {
  //   const { count, increment, decrement } = useCounter(0)
  //   return (
  //     <div>
  //       <span>{count}</span>
  //       <div className="flex flex-row">
  //         <button onClick={increment}>+</button>
  //         <button onClick={decrement}>-</button>
  //       </div>
  //     </div>
  //   )
  // }
  const handleClick = (product: any) => {
    dispatch({ type: 'ADD_TO_CART', payload: product })
  }
  if (products === null) {
    return <p>Loading</p>
  } else {
    return (
      <div className="flex flex-row flex-wrap">
        {products.map((product) => {
          return (
            <>
              <div key={product.id} className="flex flex-col shadow-brown shadow-md w-96 items-center my-5 mx-2 p-5">
                <h2>{product.title}</h2>
                <img src={product.image} alt="product" />
                <button onClick={() => handleClick(product)}> Add to Cart</button>
              </div>
            </>
          )
        })}
      </div>
    )
  }
}

export default RockCards
