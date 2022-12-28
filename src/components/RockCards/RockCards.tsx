import useCounter from '@/hooks/useCounter'
import React from 'react'
import { useEffect, useState } from 'react'

const rockCards = (): JSX.Element => {
  const [posts, setPosts] = useState([])

  const Counter = ({ post }: { post: any }) => {
    const { count, increment, decrement } = useCounter(0)
    return (
      <div>
        <span>{count}</span>
        <div className="flex flex-row">
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
        </div>
      </div>
    )
  }

  useEffect(() => {
    async function getPosts() {
      try {
        const res = await fetch('/api/posts')
        const data = await res.json()
        setPosts(data.posts)
      } catch (error) {
        console.error(error)
      }
    }

    getPosts()
  }, [])

  if (posts.length === 0) {
    return <p>No posts to display</p>
  }

  return (
    <div className="flex flex-row">
      {posts.map((post) => {
        return (
          <>
            <div key={post.id} className="flex flex-col shadow-brown shadow-md w-96 items-center my-5 mx-2">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <p>{post.date}</p>
              <Counter post={post} />
            </div>
          </>
        )
      })}
    </div>
  )
}

export default rockCards
