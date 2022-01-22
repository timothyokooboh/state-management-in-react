import { createContext, useReducer } from "react";
export const BlogContext = createContext();

const handlePost = (state, action) => {
    switch(action.type) {
        case "CREATE_POST":
            return [...state, action.payload];
        case "LIST_POSTS":
            console.log("called")
            return state;
        case "DELETE_POST":
            return state.filter(post => post.id !== action.payload);
        default:
            return state;
    }
}

const BlogContextProvider = ({ children }) => {
    const [blogs, dispatch] = useReducer(handlePost, []);

    // const createPost = (post) => {
    //     setBlogs([...blogs, post]);
    // }

    // const listPosts = () => {
    //     return blogs;
    // }

    // const deletePost = (id) => {
    //     setBlogs(blogs.filter(blog => blog.id !== id));
    // }

    return ( 
        <BlogContext.Provider value={{ blogs, dispatch }}>
            { children}
        </BlogContext.Provider>
    );
}
 
export default BlogContextProvider;