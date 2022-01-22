import { v4 as uuid } from "uuid"
import { useState, useContext } from "react";
import { BlogContext } from "../context/BlogContext";

const Blog = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
   // const { createPost, listPosts, deletePost } = useContext(BlogContext);
   const { blogs, dispatch } = useContext(BlogContext);

    const addBlog = (e) => {
        e.preventDefault();
        
       // createPost({ title, content, id: uuid() });
        dispatch({ type: "CREATE_POST", payload: { title, content, id: uuid() } });

        setTitle("");
        setContent("");
    }

    return ( 
        <div>
            <h1> My blogs </h1>

            <form onSubmit={addBlog}>
                <div style={{marginBottom: '20px' }}>
                    <label>
                        <span>Title</span> <br />
                        <input type="text" value={title} onInput={(e) => setTitle(e.target.value) } />
                    </label>
                </div>

               <div>
                <label>
                        <span>Content</span> <br />
                        <textarea type="text" value={content} onInput={(e) => setContent(e.target.value)} ></textarea>
                    </label>
               </div>

                <button type="submit">Submit</button>
            </form>

            <div className="list-posts">
                {
                    blogs.map(blog => {
                        return (
                            <div key={blog.id}>
                                <h3>{blog.title}</h3>
                                <p>{blog.content}</p>
                                <button onClick={() => dispatch({ type: 'DELETE_POST', payload: blog.id })}>Delete</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}
 
export default Blog;