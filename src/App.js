
import './App.css';
import Blog from './components/Blog';
// import Home from './components/Home';
import AuthContextProvider from './context/AuthContext';
import BlogContextProvider from './context/BlogContext';
import UserContextProvider from './context/UserContext.js';
import { useState, useMemo } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const expensive = useMemo(() => expensiveFunc(count))

  return (
    <div className="App">
      <button onClick={() => setCount((count) => count + 1)}>click</button>
      {count}
      <div>expensive: {expensive}</div>
      <UserContextProvider>
        <AuthContextProvider>
          { /* <Home /> */ }
          <BlogContextProvider>
          { /* <Blog /> */ }
          </BlogContextProvider>
        </AuthContextProvider>
      </UserContextProvider>
    </div>
  );
}

const expensiveFunc = (arg) => {
  console.log("calculating>>>>")
  for(let i = 0; i < 100000000000; i++) {
    return i + arg * 5;
  }
}

export default App;
