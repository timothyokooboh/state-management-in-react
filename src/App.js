
import './App.css';
import Blog from './components/Blog';
// import Home from './components/Home';
import AuthContextProvider from './context/AuthContext';
import BlogContextProvider from './context/BlogContext';
import UserContextProvider from './context/UserContext.js';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <AuthContextProvider>
          { /* <Home /> */ }
          <BlogContextProvider>
            <Blog />
          </BlogContextProvider>
        </AuthContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
