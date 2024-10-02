import React, { useEffect, useState } from "react";

function LearnUseEffect() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => setPosts(posts));
  }, []);

  return (
    <div className="ml-10">
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <label>{post.id}. </label> {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LearnUseEffect;
