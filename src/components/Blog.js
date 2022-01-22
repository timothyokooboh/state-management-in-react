import { v4 as uuid } from "uuid"
import { useState, useContext, createRef, useEffect, useRef } from "react";
import { BlogContext } from "../context/BlogContext";
import FancyButton from "./Button";

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

    const titleLabel = createRef();
    const contentLabel = createRef();
    useEffect(() => {
      //  console.log(titleLabel.current);
      //  console.log(contentLabel.current);
    }, [])

    const ref = useRef(null)
    const man = useRef("john")

    const handleClick = () => {
       console.log(ref.current);
       man.current = "blake"
       // ref.current.setAttribute('hidden', true);
    }

    useEffect(() => {
        console.log(man.current)
    })


    return ( 
        <div>
            <h1> My blogs </h1>

            <form onSubmit={addBlog}>
                <div style={{marginBottom: '20px' }}>
                    <label ref={titleLabel}>
                        <span>Title</span> <br />
                        <input type="text" value={title} onInput={(e) => setTitle(e.target.value) } />
                    </label>
                </div>

               <div>
                <label ref={contentLabel}>
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

            <div style={{marginTop: '50px', marginBottom: '30px'}}>
                <button onClick={handleClick}>click me</button>
            </div>

            <FancyButton ref={ref}>Click me now</FancyButton>
            <div>
                { man.current }
            </div>
        </div>
    );
}
 
export default Blog;