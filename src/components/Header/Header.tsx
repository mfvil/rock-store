import React from 'react'

const Header = (): JSX.Element => {
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
            <span role="img">🛒</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Header
