import { useCounterStore } from "./store/counterStore";
import shallow from "zustand/shallow";
import { useEffect } from "react";

const App = () => {

  const {count, title, posts} = useCounterStore((state) => ({ 
    count: state.count,
    title: state.title,
    posts: state.posts
  }), shallow);

  const {increment, getPosts} = useCounterStore();

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <div>{title}: {count}</div>

      <button onClick={() => increment}>+</button>

      {
      posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))
      }
    </>
  )
}

export default App