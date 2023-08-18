import React from 'react'
import Post from './post'

export default function Posts() {
    const posts = [
        {
            id: "1",
            username: "itsvlogtime",
            userImg: "https://yt3.googleusercontent.com/bkh2hC8aY-IQfQhykosVfnWZsUXK0dgxBaqJst7t5fbBO8qZWGy31h98l0qNuR4qWU59csDW8w=s176-c-k-c0x00ffffff-no-rj",
            img: "https://images.unsplash.com/photo-1691225557634-863116e2eb1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80",
            caption: "That water looks fricken sweet!"
        },
        {
            id: "2",
            username: "someotherdude",
            userImg: "https://yt3.googleusercontent.com/bkh2hC8aY-IQfQhykosVfnWZsUXK0dgxBaqJst7t5fbBO8qZWGy31h98l0qNuR4qWU59csDW8w=s176-c-k-c0x00ffffff-no-rj",
            img: "https://images.unsplash.com/photo-1685898044655-2595aa00519d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1244&q=80",
            caption: "Hello mr.cow uwu"
        }
    ]

  return (
    <div>
        {posts.map(post => (
            <Post
                key={post.id}
                id={post.id}
                username={post.username}
                userImg={post.userImg}
                img={post.img}
                caption={post.caption}
            />
        ))}

    </div>
  )
}
