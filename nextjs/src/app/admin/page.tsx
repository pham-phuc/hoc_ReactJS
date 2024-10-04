'use client'
import axios from "axios";
import { useState, useEffect } from "react";

// Define a TypeScript interface for a Post
interface Post {
  id: number;
  title: string;
  body: string;
}

export default function Page() {
  const [posts, setPosts] = useState<Post[]>([]); // Type the state as an array of Post objects

  const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts",
  });

  useEffect(() => {
    client.get("?_limit=10").then((response) => {
      setPosts(response.data); // TypeScript now knows response.data is of type Post[]
    });
  }, []);

  return (
    <div className="app">
      <h2>All Posts</h2>
      {posts.map((post) => (
        <div className="post-card" key={post.id}>
          <h2 className="post-title">{post.id}: {post.title}</h2>
          <p className="post-body">{post.body}</p>
          
        </div>
      ))}
    </div>
  );
}
