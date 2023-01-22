import { ctx } from '@/context/useContext'
import { StateInterface } from '@/globalTypes'
import { useContext } from 'react'

const Header = (): JSX.Element => {
  const { shoppingCart } = useContext<StateInterface>(ctx)
  return (
    <div className="flex flex-row justify-between  border-black h-20 shadow-brown shadow-md p-6 w-full">
      <h1>THE ROCK STORE</h1>
      <ul className="flex flex-row ">
        <li className="mx-5">
          <a href="#">REGULAR ROCKS</a>
        </li>
        <li className="mx-5">
          <a href="#">COOL ROCKS</a>
        </li>
        <li className="mx-5">
          <a href="#">STRANGE AND RARE ROCKS</a>
        </li>
        <li>
          <a href="#">
            <span role="img">🛒{shoppingCart.length}</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Header
