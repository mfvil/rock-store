import React from 'react'

const Header = ({}): JSX.Element => {
  return (
    <div className="bg-white flex flex-row justify-between">
      <h1>Rock Store</h1>
      <ul className="flex flex-row ">
        <li className="mx-5">
          <a href="#">Regular Rocks</a>
        </li>
        <li className="mx-5">
          <a href="#">Cool Rocks</a>
        </li>
        <li className="mx-5">
          <a href="#">Strange and Rare Rocks</a>
        </li>
        <li>
        🛒
        </li>
      </ul>
    </div>
  )
}

export default Header
